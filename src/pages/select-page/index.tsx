import ProviderCard from "@/components/card";
import { FilterButton } from "@/components/filter-button";
import Header from "@/components/header";
import { useGetProviders } from "@/core/api/provider";


const SelectPage = () => {
    const { data, error, status } = useGetProviders();

    return <div className="bg-light h-fit min-h-screen w-screen">
        <Header />
        <div className="flex flex-col max-w-[1200px] w-[90vw] h-fit pt-4 mx-auto">
            <FilterButton />
            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    status === 'pending' && <p className="text-green-dark">Loading...</p>
                }
                {
                    status === 'error' && <p className="text-green-dark">{error.message}</p>
                }
                {
                    status === 'success' && data && data.map((provider, i) => {
                        return <ProviderCard
                            key={provider.id}
                            provider={provider}
                            matchBadgeText={i === 0 ? 'Top Match' : `${i + 1}. match`}
                        />
                    })
                }
            </div>
        </div>
    </div>
}

export default SelectPage