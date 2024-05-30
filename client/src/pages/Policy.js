import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>EatFood and/or its affiliates respect your privacy and is committed to protecting it through its compliance with its privacy policies. This policy describes:
the types of information that EatFood may collect from you when you access or use its websites, applications and other online services (collectively, referred as "Services"); and
its practices for collecting, using, maintaining, protecting and disclosing that information.
This policy applies only to the information EatFood collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.
This policy DOES NOT apply to information that you provide to, or that is collected by, any third-party, such as restaurants at which you make reservations and/or pay through EatFood's Services and social networks that you use in connection with its Services. EatFood encourages you to consult directly with such third-parties about their privacy practices.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
