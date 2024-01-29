
import Typography from "antd/es/typography/Typography";
import CardPerson from "./CardPerson";

export const Testimony = () => {

    return (
        <section className="w-full" >
            <Typography.Title level={1} style={{ color: 'rgb(6, 189, 6)', }} className="font-bold text-gre"  >
                Our customers love us
            </Typography.Title>

            <div className="" style={{ display: 'flex', justifyContent: 'center', gap:'25px' , flexWrap:'wrap'}}>
                <CardPerson />
                <CardPerson />
                <CardPerson />
            </div>

        </section>
    );
}