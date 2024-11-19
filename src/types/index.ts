export type ProviderData = {
    id?: string,
    avatarUrl: string,
    fullName: string,
    pricing: PaidIntroPricing,
    title: string,
    yearsOfExperience: number,
    therapyQuotes: string[],
    goLiveDate: string,
    tags: string[],
    badges: string[]
  }

export interface SearchProviderResponse {
    searchProviders: SearchProviders;
}
interface SearchProviders {
    providers: Providers;
}
interface Providers {
    providers: Provider[];
}
interface UserName {
    firstName: string;
    lastName: string;
}

interface UserInfo {
    avatar: string;
    firebaseUid: string;
}
interface Provider {
    paidIntroPricing?: PaidIntroPricing;
    profile: Profile;
    userName: UserName;
    userInfo: UserInfo;
}
interface Profile {
    isLive: boolean;
    slug: string;
    providerInfo: ProviderInfo;
    therapyQuote: TherapyQuote;
    goLiveDate?: string;
    providerTagInfo: ProviderTagInfo;
    providerBadgeInfo: ProviderBadgeInfo;
}
interface ProviderBadgeInfo {
    badges: string[];
}
interface ProviderTagInfo {
    tags: Tag[];
}
interface Tag {
    text: string;
}
interface TherapyQuote {
    influences: Influence[];
}
interface Influence {
    detail: Detail;
}
interface Detail {
    label: string;
}
interface ProviderInfo {
    providerTitle: string;
    yearExperience: number;
}
interface PaidIntroPricing {
    price: number;
    durationType: string;
}