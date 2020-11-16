import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/refund.module.css'

const refund =() => {
  return(
    <Layout>
      <SEO title="RefundPolicy" />
      <div className={styles.refund}>
          <div className={styles.refundpolicy}>
            <h1>Refund Policy</h1>
            <p>We offer a no-hassle 30 day return policy 
              for all full price purchases, and no 
              restocking fees for items returned in 
              brand new and re-sellable condition with 
              the original packaging. If you need to 
              return an item for any reason, please 
              contact us and request an individual RA 
              number and return shipping address. 
            </p>
            <p>
              If you have purchased a service from 
              us such as coaching or advice then we 
              can refund you up to 30 days after the 
              purchase of the service subject to the 
              service not having started. If the 
              service has been used then we will 
              refund you on a pro rata basis for the 
              amount of time the service was used and 
              the remainder of the service still left.
            </p>
            <h2>RETURNS FOR A REFUND</h2>
            <p>Products returned for a refund must be 
              in brand new and re-sellable condition, 
              and contain all original parts and packaging. 
              Items in brand new, unused condition may be 
              returned within 30 days of purchase, but are 
              ineligible for return once worn or used or if 
              the packaging is not in re-sellable condition. 
            </p>
            <p>
              Services provided that cannot be returned will 
              be refunded on a pro-rata basis for the amount 
              of service that has been unused at the time 
              of the refund request.
            </p>
            <h2>SHIPPING</h2>
            <p>To return your product, you should mail 
              contact us first for an RA number. We will 
              then provide you with the return shipping address. 
              Please do not send a product back without getting 
              an RA number first.
            </p>
            <p>You will be responsible for paying for your own 
              shipping costs for returning your item. Shipping 
              costs are non-refundable. If you receive a refund, 
              the cost of return shipping will be deducted from your refund. 
            </p>
            <p>
              Depending on where you live, the time it may take 
              for your exchanged product to reach you, may vary. 
            </p>
            <p>
              If you are shipping an item over $75, you should 
              consider using a trackable shipping service or 
              purchasing shipping insurance. We don’t guarantee 
              that we will receive your returned item.
            </p>
          </div>
      </div>
    </Layout>
  )
}
export default refund