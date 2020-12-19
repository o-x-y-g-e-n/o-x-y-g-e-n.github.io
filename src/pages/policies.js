import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import Content from 'components/Content'
import SEO from 'components/Seo'
import GridTemplate from 'components/GridTemplate'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Pricacy Policies" />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet> 
      <GridTemplate>
        <Content>
        <h2> Privacy policy for <strong>o-x-y-g-e-n.github.io</strong> </h2>

<p>Shivam Gohel ("I") operates o-x-y-g-e-n.github.io (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. </p>
          <p> The use of <strong> o-x-y-g-e-n.github.io </strong> implies acceptance of this privacy agreement. The <strong> o-x-y-g-e-n.github.io </strong> website reserves the right to change this agreement without prior notice. Therefore, we recommend that you check our privacy policy regularly so that you are always up to date. </p>
          <h2> Cookies and Web Beacons </h2>

<p> We use cookies to store information, such as your personal preferences when you visit our website. For example, to save your theme preferences when you return to the site. </p>
<p> The Application uses <strong>Google Analytics</strong>, an analysis service provided by Google, Inc. ("Google"). Google Analytics uses cookies to help us analyze how Users use the Application. The information collected in the cookie about how you use the Application (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating how you use the Application, reporting on activities on the Application and providing other services relating to activities on the Application and Internet usage. Google may also transfer this information to third parties when required by law or for such third parties to process the information on Google's behalf and for the account. Google will not associate your IP address with any other data. Google's use of this data is governed by the Google Analytics Terms of Use and the <a href="https://policies.google.com/technologies/partner-sites"> Google Privacy Policy </a>. </p>
<p> You have the power to turn off your cookies, in your browser options. However, this may change the way you interact with our website, or other websites. This may affect or not allow you to log in to websites over the internet. </p>

<h2> Connections to third party websites </h2>

<p> <strong> o-x-y-g-e-n.github.io </strong> has links to other sites, which may contain useful information. Our privacy policy is not applied to third party sites, so if you visit another site from ours you should read its privacy policy. </p>
<h2>Contact Me</h2>
<p>If you have any questions or suggestions about my Privacy Policy, feel free to contact me at <a href="mailto:shivamgohel777@gmail.com">shivamgohel777@gmail.com</a></p>
        </Content>
      </GridTemplate>
    </Layout>
  )
}

export default IndexPage
