import { Button } from "antd";
import "../../assets/index.css";

import {} from "../../assets/welcome.css";
import { CheckOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography/Typography";
import { useEffect } from "react";
import { loadProducts } from "../../redux/product.slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loadCategories } from "../../redux/category.slice";

export function WelcomePage() {
  const dispatch = useDispatch();
  const fetchInitData = async () => {
    try {
      const pResult = await axios.get("http://localhost:8000/api/productlist");
      const products = await pResult.data;
      dispatch(loadProducts(products));

      // load categories
      const cresult = await axios.get("http://localhost:8000/api/categories");
      const categories = await cresult.data;
      dispatch(loadCategories(categories));
    } catch (err) {
      console.log("err: ", err.message);
    }
  };

  useEffect(() => {
    fetchInitData();
  }, []);

  return (
    <section className="overflow-x-hidden">
      <section
        style={{
          display: "flex",
          width: "100%",
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <div
          style={{
            paddingLeft: "30px",
            width: "55%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className=" min-h-fit">
            <p className="text-5xl font-bold">
              Lorem ipsum dolor sit amet,{" "}
              <span style={{ color: "rgb(6, 189, 6)" }}>consectetur</span>{" "}
              adipisicing isicing
            </p>
          </div>

          <div className="text-gray li h-full" style={{ marginTop: "-10px" }}>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ea
              placeat. Eum corporis veniam ea quisquam aliquam blanditiis omnis
              molestiae, consequuntur autem eligendi doloremque voluptatibus
              dolore dignissimos tempore laborum! Iusto!
            </p>

            <Button type="primary" icons={<CheckOutlined />} size={"large"}>
              Subcribe now
            </Button>
          </div>
        </div>

        <div
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            height="470px"
            className="rounded-full opacity-0  anime-come"
            src="/assets/recolte-3-no-min.jpg"
            alt=""
            srcset=""
          />
        </div>
      </section>

      <section
        className=""
        style={{
          background: "rgb(129, 123, 123)",
          color: "white",
          paddingLeft: "10%",
          marginTop: "100px",
          paddingTop: "50px",
          paddingRight: "10%",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography.Title
          level={1}
          style={{ color: "white" }}
          className="font-bold text-gre"
        >
          Ours Products
        </Typography.Title>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            className="ligne"
            style={{
              paddingLeft: "10px",
              color: "rgb(241, 239, 239)",
              paddingRight: "10px",
              paddingRight: "50px",
              marginTop: "80px",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            libero autem adipisci rerum aut, nulla dolorum assumenda log Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            perspiciatis recusandae ea provident ratione veritatis eum. Quisquam
            nam qui asperiores eaque numquam eligendi, esse consequuntur aperiam
            vel saepe minima inventore? voluptas maiores aspernatur repellat
            necessitatibus nobis, tempora, voluptatem itaque tenetur. Qui,
            repudiandae consectetur!
          </div>

          <div
            style={{ padding: "10px", background: "white" }}
            className="rounded-10"
          >
            <img
              src="/assets/recolte-4-no-min.jpg"
              className="rounded-10 object-cover"
              width="250px"
              height="250px"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ padding: "10px", background: "white" }}
            className="rounded-10"
          >
            <img
              src="/assets/5d55d33730f93d0ef60a17b7ae0a966d__1_-removebg-preview.png"
              className="rounded-10 object-cover"
              width="250px"
              height="250px"
              alt=""
              srcset=""
            />
          </div>
          <div
            className="ligne"
            style={{
              paddingLeft: "50px",
              color: "rgb(241, 239, 239)",
              paddingRight: "10px",
              paddingRight: "50px",
              marginTop: "80px",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            libero autem adipisci rerum aut, nulla dolorum assumenda log Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            perspiciatis recusandae ea provident ratione veritatis eum. Quisquam
            nam qui asperiores eaque numquam eligendi, esse consequuntur aperiam
            vel saepe minima inventore? voluptas maiores aspernatur repellat
            necessitatibus nobis, tempora, voluptatem itaque tenetur. Qui,
            repudiandae consectetur!
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <div
            className="ligne"
            style={{
              paddingLeft: "10px",
              paddingRight: "50px",
              paddingRight: "10px",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            libero autem adipisci rerum aut, nulla dolorum assumenda log Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            perspiciatis recusandae ea provident ratione veritatis eum. Quisquam
            nam qui asperiores eaque numquam eligendi, esse consequuntur aperiam
            vel saepe minima inventore? voluptas maiores aspernatur repellat
            necessitatibus nobis, tempora, voluptatem itaque tenetur. Qui,
            repudiandae consectetur!
          </div>

          <div
            style={{
              padding: "10px",
              color: "rgb(241, 239, 239)",
              background: "white",
            }}
            className="rounded-10"
          >
            <img
              src="/assets/recolte-8-no-min.jpg"
              style={{ marginTop: "2px" }}
              className="rounded-10 object-cover"
              width="250px"
              height="250px"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>

      <section style={{ paddingRight: "5%", paddingLeft: "5%" }}>
        <Typography.Title
          level={1}
          style={{ color: "rgb(6, 189, 6)" }}
          className="font-bold text-gre"
        >
          Why trust us ?
        </Typography.Title>

        <article
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            className="w-full  text-wrap"
            style={{ paddingRight: "5%", paddingLeft: "5%" }}
          >
            <p className="mt-20" style={{ marginTop: "40px" }}>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              iusto labore laboriosam placeat qui{" "}
              <span style={{ color: "rgb(6, 189, 6)" }} className="font-bold">
                {" "}
                eum minus omnis corrupti rerum ab? Laborum{" "}
              </span>{" "}
              sapiente nam vitae cupiditate. Perferendis dolores deserunt
              dignissimos quos. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ipsam mollitia architecto suscipit sunt magni
              distinctio, explicabo quos consequuntur dolores commodi? Sequi ad
            </p>

            <img
              src="/assets/78a9dfdda223c4f152d61281ba3277f4-removebg-preview.png"
              alt=""
              srcset=""
            />

            <div style={{ marginTop: "10px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dicta totam eos atque exercitationem id hic? Obcaecati
              molestias eaque in dolores eos quam deleniti alias fuga
              praesentium blanditiis, non voluptatem.
            </div>
          </div>

          <div className="-mt-10">
            <img
              src="/assets/recolte-5-no-min.jpg-removebg-preview.png"
              alt=""
              srcset=""
            />
          </div>

          <div></div>
        </article>
      </section>

      <section className="mt-10">
        <div>
          <Typography.Title
            level={3}
            style={{ textAlign: "center", marginTop: 0 }}
          >
            They trusted us.
          </Typography.Title>
        </div>
      </section>
    </section>
  );
}
