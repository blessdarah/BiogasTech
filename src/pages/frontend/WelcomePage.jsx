import { Button } from "antd";
import '../../assets/index.css'
import '../../assets/mobile.css'


import { } from '../../assets/welcome.css'
import { CheckOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography/Typography";
import { Testimony } from "../../Components/testimony";
import CardPerson from "../../Components/CardPerson";
import Footer from "../../Components/footer";

export function WelcomePage() {

  return (<section className="overflow-x-hidden">
    <section className="hero-containe flex " style={{  width: '100%', paddingLeft: '3%', paddingRight: '3%' }}>
      <div className="hero max-770" style={{ paddingLeft: '30px', width: '55%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div className="  min-h-fit">
          <p className="text-5xl welcome font-bold">
            Effective <span style={{ color: 'rgb(6, 189, 6)' }}> waste  management </span> is  a sustainable future.
          </p>

        </div>

        <div className="text-gray li h-full" style={{ marginTop: '-10px' }}>
          <p className="description">
          BioWaste Tech is a company that provides innovative and sustainable agricultural waste management solutions. We help farmers transform their waste into valuable resources, especially their environmental impact.
          </p>

          <Button type="primary" icons={<CheckOutlined />} size={'large'}>
            Subcribe now
          </Button>
        </div>
      </div>

      <div className="hero2  flex" style={{ width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img height='320px'  className="rounded-full rotate-90 image-1 opacity-0  anime-come" src="/assets/waste.PNG" alt="" srcset="" />

      </div>



    </section>


    <section className="" style={{ background: 'rgb(192, 192, 192)', color: 'black', paddingLeft: '10%', marginTop: '100px', paddingTop: '50px', paddingRight: '10%', paddingBottom: '100px', display: 'flex', flexDirection: 'column' }}>

      <Typography.Title level={1} style={{ color: 'rgb(27, 27, 27)', }} className="font-bold text-gre"  >
        Ours Products
      </Typography.Title>


      <div className="max-770" style={{ display: 'flex', gap: '10px', flexDirection: 'row',  width: '100%', justifyContent: 'space-between' }}>

        <div className="ligne" style={{ paddingLeft: '10px', color: 'rgb(27, 27, 27)',  paddingRight: '50px', marginTop: '40px' }}>
        Biochar is a type of charcoal produced from agricultural, forestry or urban biomass. It is obtained by pyrolysis, a combustion process in the absence of oxygen. Pyrolysis breaks down biomass into a mixture of gases, liquids and solids. Biochar is the solid remaining after pyrolysis.

Biochar is a value-added product that has many advantages. It is particularly used as a soil amendment, to improve its fertility and structure. It is also used as fuel, to produce heat or electricity.
        </div>

        <div style={{ padding: '10px', background: 'white', }} className="rounded-10">
          <img src="/assets/greenchaco.pngg.PNG" className="rounded-10 object-cover" width='250px' height='250px' alt="" srcset="" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

        <div style={{ padding: '10px', background: 'white', }} className="rounded-10">
          <img src="/assets/5d55d33730f93d0ef60a17b7ae0a966d__1_-removebg-preview.png" className="rounded-10 object-cover min-h-fit " width='250px' height='250px' alt="" srcset="" />
        </div>
        <div className="ligne" style={{ paddingLeft: '50px', color: 'rgb(27, 27, 27)',  paddingRight: '50px', marginTop: '80px' }}>
        Biogas is a gas produced by the fermentation of biomass. It is composed mainly of methane, carbon dioxide and other gases.

Biogas can be used as an energy source to produce heat, electricity or fuel. It is also used to produce compost.
          </div>


      </div>


      <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: '40px' }}>

        <div className="ligne" style={{ paddingLeft: '10px', paddingRight: '50px', marginTop: '30px' }}>
        Les produits BioWaste Tech ont de bonnes perspectives de développement. La demande de produits respectueux de l'environnement et durables est en croissance constante. BioWaste Tech est bien positionnée pour répondre à cette demande.
        </div>

        <div style={{ padding: '10px', color: 'rgb(241, 239, 239)', background: 'white', }} className="rounded-10">
          <img src="/assets/recolte-8-no-min.jpg" style={{ marginTop: '2px' }} className="rounded-10 object-cover" width='250px' height='250px' alt="" srcset="" />
        </div>
      </div>





    </section>



    <section style={{ paddingRight: '5%', paddingLeft: '5%' }}>
      <Typography.Title level={1} style={{ color: 'rgb(6, 189, 6)', }} className="font-bold text-gre"  >
        Why trust us ?
      </Typography.Title>

      <article style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>

        <div className="w-full  text-wrap" style={{ paddingRight: '5%', paddingLeft: '5%' }}>


          <p className="mt-20" style={{ marginTop: '40px' }}> 

            There are several ways to create charcoal using waste, and the best method for you will depend on the type and amount of waste you have available, as well as your desired level of production and quality
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between' }} className="w-full">
            <img src="/assets/procces.png" alt="" srcset="" />
            <img src="/assets/machine.PNG" alt="" srcset="" />

          </div>

          

          

        </div>





        <div>

        </div>
      </article>


      <Testimony />






    </section>



    <section className="mt-10">

      <div>

        <Typography.Title
          level={3}
          style={{ textAlign: "center", marginTop: 0 }}
        >

        </Typography.Title>
      </div>
      <Footer />





    </section>



  </section>


  );
}
