
import Typography from "antd/es/typography/Typography";
import CardPerson from "./CardPerson";

export const Testimony = () => {

    return (
        <section className="w-full" >
            <Typography.Title level={1} style={{ color: 'rgb(6, 189, 6)', }} className="font-bold text-gre"  >
                Our customers love us
            </Typography.Title>

            <div className="" style={{ display: 'flex', justifyContent: 'center', gap:'25px' , flexWrap:'wrap',color:'black'}}>
                <CardPerson src="/assets/recolte-7-no-min.jpg.jpg" name="NKOM PAUL" comment={"BioWaste Tech allowed us to save time and money. Before, we had to spend a lot of time and effort collecting and transporting our waste. With BioWaste Tech, we have custom collection containers that are collected directly from our farm. We no longer have to worry about waste management, BioWaste Tech takes care of it for us. It's a real relief."} />
                <CardPerson src="/assets/recolte-9-no-min.jpg" name="CHI CHE laura" comment={"BioWaste Tech has allowed us to reduce our environmental impact. By recycling our waste, we help reduce air and water pollution. We are proud to be able to do our part to protect the environment. BioWaste Tech is a sustainable solution that allows us to reconcile profitability and environmental responsibility"} />
                <CardPerson src="/assets/recolte-5-no-min.jpg.jpg" name="ATANGANA LOIC" comment={"Avant BioWaste Tech, nous avions un gros problème de gestion des déchets agricoles. Nous devions brûler ou enfouir nos déchets, ce qui était polluant et coûteux. Depuis que nous utilisons BioWaste Tech, nous transformons nos déchets en compost et en biogaz. "} />
            </div>

        </section>
    );
}