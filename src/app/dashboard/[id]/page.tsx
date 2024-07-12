import Essbio from "@/components/covenantsHTML/Essbio";
import {EnterpriseCovenant} from "@/components/dashboard/Sidebar";
import EmbotelladoraAndina from "@/components/covenantsHTML/EmbotelladoraAndina";

export default function CovenantDetailPage({params}: {params: { id: string }}) {
    const covenantID = params.id as EnterpriseCovenant;

    /*const covenants: {id: EnterpriseCovenant; title: string; render: () => JSX.Element }[] = [
        {id: 'essbio', title: 'Essbio', render: Essbio},
        {id: 'embotelladora-andina', title: 'Embotelladora Andina', render: EmbotelladoraAndina},
    ]*/

    const covenants: Record<EnterpriseCovenant, {title: string, render(): JSX.Element}> = {
        'essbio': {title: 'Essbio', render: Essbio},
        'embotelladora-andina': {title: 'Embotelladora Andina', render: EmbotelladoraAndina}
    }

    const currentCovenant = covenants[covenantID];

    if ( !currentCovenant ) return <p>Not found</p>;
    return (
        <div>
            <p className={'text-xl font-medium mb-4'}>{currentCovenant.title}</p>
            {currentCovenant.render()}
        </div>
    )
}