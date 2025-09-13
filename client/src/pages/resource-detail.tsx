import { useParams, Link } from "wouter";
import { Calendar, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ResourceDetail() {
  const { slug } = useParams();

  // Blog posts data (same as in resources.tsx)
  const blogPosts = [
    {
  slug: "quickbooks-vs-xero",
  date: "March 15, 2024",
  title: "QuickBooks vs Xero: Choosing the Best Accounting Software",
  content: `
## **Overview**
QuickBooks and Xero are the two most popular cloud-based accounting solutions for small and medium businesses.  
Both provide powerful tools for bookkeeping, financial reporting, and tax compliance, but they cater to slightly different needs.

## **Pricing**
- **[QuickBooks Pricing](https://quickbooks.intuit.com/global/oa/online-accounting-software-for-small-business/?cid=ppc_QBO_AFRICA-USD_B_QuickBooks_Broad_G_S&gclsrc=aw.ds&gad_source=1&gad_campaignid=22838128450&gbraid=0AAAAAD1w8J_2TFl2XdhA2MrEQMSe5RGnq&gclid=Cj0KCQjwrJTGBhCbARIsANFBfgtta4RMcBhPbd-YVzU6A-fQatAoI0lV-2k8jScEdhNgsw1b1G6e5PoaAm_5EALw_wcB#pricing):**  
  Multiple tiers with optional add-ons such as Payroll and Advanced Reporting.  
- **[Xero Pricing](https://www.xero.com/pricing-plans/):**  
  Simpler pricing structure with unlimited users on every plan.

## **Core Features**
- **Bank Feeds & Reconciliation:** Both provide automatic bank feeds, but QuickBooks offers more U.S.–specific integrations.  
- **Invoicing:** Xero’s invoicing is highly customizable, while QuickBooks includes more ready-made templates.  
- **Payroll:** QuickBooks Payroll is integrated (extra fee). Xero requires third-party apps.

## **Ease of Use**
QuickBooks focuses on detailed reporting and a familiar interface for accountants.  
Xero provides a cleaner, collaboration-friendly dashboard that many non-accountants find easier to navigate.

## **Ideal Users**
- **QuickBooks:** Great for businesses needing advanced payroll, inventory tracking, or deep U.S. tax integrations.  
- **Xero:** Perfect for teams seeking unlimited users, international flexibility, and streamlined collaboration.

## **Migration Tips**
1. **Back up current data** before you start.  
2. **Map your chart of accounts** carefully to avoid discrepancies.  
3. **Run a test migration** with sample transactions.  
4. **Train your team** to ensure a smooth adoption.

## **Conclusion**
Both platforms are excellent choices.  
Choose **QuickBooks** if you need comprehensive payroll and U.S.-centric features.  
Choose **Xero** if collaboration, unlimited users, and a clean user experience are top priorities.

---

## **Need Help Deciding?**
Have questions or need assistance setting up your accounting software?  
[**Contact Us**](/contact) today for a free consultation.
  `,
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
},
   
    {
      slug: "accounting-software-migration",
      date: "March 10, 2024",
      title: "5 Steps to Successful Accounting Software Migration",
      content: `
        Migrating to a new accounting system doesn’t need to be stressful.
        Key steps: 1) Backup your data, 2) Choose the right software,
        3) Map your chart of accounts, 4) Test migrations, 5) Train your staff.
      `,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      slug: "digital-accounting-trends-kenya",
      date: "March 5, 2024",
      title: "Digital Accounting Trends in Kenya's SME Sector",
      content: `
        SMEs in Kenya are rapidly adopting cloud-based accounting solutions.
        Benefits include automation, real-time financial insights, and easier compliance.
        This trend is expected to grow as businesses digitize operations.
      `,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
  ];

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
        <Link href="/resources" className="text-primary hover:underline">
          ← Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <Helmet>
        <title>{post.title} | FinExact Solutions</title>
        <meta name="description" content={post.content.slice(0, 150)} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources"
          className="flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="rounded-2xl shadow-lg w-full h-auto mb-8"
        />

        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
          {post.content}
        </p>
      </div>
    </div>
  );
}
