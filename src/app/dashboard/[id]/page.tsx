import {EnterpriseCovenant} from "@/app/components/dashboard/Sidebar";
import Essbio from "@/app/components/covenantsHTML/Essbio";
import EmbotelladoraAndina from "@/app/components/covenantsHTML/EmbotelladoraAndina";
import "../../components/covenantsHTML/sheet.css";

export default function CovenantDetailPage({params}: {params: { id: string }}) {
    const covenantID = params.id as EnterpriseCovenant;

    const covenants: Record<EnterpriseCovenant, {title: string, render(): JSX.Element}> = {
        'essbio': {title: 'Essbio', render: Essbio},
        'embotelladora-andina': {title: 'Embotelladora Andina', render: EmbotelladoraAndina}
    }

    const currentCovenant = covenants[covenantID];

    if ( !currentCovenant ) return <p className={'p-4'}>Not found</p>;
    return (
        <div>
            <div className={'w-full sticky top-0 pb-4 z-10 bg-white shadow p-4'}>
                <p className={'text-xl font-medium'}>{currentCovenant.title}</p>
            </div>
            {currentCovenant.render()}
        </div>
    )
}