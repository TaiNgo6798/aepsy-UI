import { SCHEMA_URL } from "@/core/const";
import { ProviderData, SearchProviderResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

const allProvidersQuery = `
    query($pageNum: Int!, $pageSize: Int!) {
      searchProviders(
        input: {languages: [ENGLISH], providerAreas: [], clientTypes: ADULT}
      ) {
        id
        providers(pageNum: $pageNum, pageSize: $pageSize) {
          providers {
            userInfo {
              avatar
              firebaseUid
            }
            userName {
              firstName
              lastName
            }
            paidIntroPricing {
              price
              durationType
            }
            profile {
              isLive
              slug
              providerInfo {
                providerTitle
                yearExperience
              }
              therapyQuote {
                influences {
                  detail {
                    label
                  }
                }
              }
              goLiveDate
              providerTagInfo {
                tags {
                  text
                }
              }
              providerBadgeInfo {
                badges
              }
            }
          }
        }
      }
    }    
    `

const mockTherapiQuotes = {
  "influences": [
    {
      "detail": {
        "label": "Life crisis"
      }
    },
    {
      "detail": {
        "label": "Pregnancy and birth"
      }
    },
    {
      "detail": {
        "label": "Parenting"
      }
    },
    {
      "detail": {
        "label": "Loneliness"
      }
    },
    {
      "detail": {
        "label": "Decision conflicts"
      }
    },
    {
      "detail": {
        "label": "Family"
      }
    },
    {
      "detail": {
        "label": "Sexuality"
      }
    },
    {
      "detail": {
        "label": "Separation"
      }
    },
    {
      "detail": {
        "label": "Aimlessness"
      }
    }
  ]
}

// Just to mock data
const filterListProvider = (providers: SearchProviderResponse['searchProviders']['providers']['providers']) => { 
  return providers
  .filter(provider => 
    provider.userInfo.avatar 
  )
  .slice(0, 3)
 }

export function useGetProviders({
  pageNum,
  pageSize
}: {
  pageNum?: number,
  pageSize?: number
} = {
    pageNum: 1,
    pageSize: 25
  }) {
  return useQuery({
    queryKey: ['providers'],
    queryFn: async (): Promise<ProviderData[]> => {
      const result = await request<SearchProviderResponse>(SCHEMA_URL, allProvidersQuery, {
        pageNum,
        pageSize,
      })
      return filterListProvider(result.searchProviders.providers.providers).map((provider, i) => {
        return {
          id: provider.userInfo.firebaseUid,
          avatarUrl: provider.userInfo.avatar,
          fullName: `${provider.userName.firstName} ${provider.userName.lastName}`,
          pricing: provider.paidIntroPricing,
          title: ['Psychotherapist', 'Psychologist', 'Psychotherapist'].at(i),
          yearsOfExperience: provider.profile.providerInfo.yearExperience,
          therapyQuotes: mockTherapiQuotes.influences.map(influence => influence.detail.label),
          goLiveDate: provider.profile.goLiveDate,
          tags: provider.profile.providerTagInfo.tags.map(tag => tag.text),
          badges: provider.profile.providerBadgeInfo.badges
        } as ProviderData
      })
    },
  });
}