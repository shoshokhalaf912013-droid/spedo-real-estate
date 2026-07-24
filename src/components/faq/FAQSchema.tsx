import { faq as faqDatabase } from "@/data/faq";

export default function FAQSchema() {

    const schema = {

        "@context": "https://schema.org",

        "@type": "FAQPage",

        mainEntity:

            faqDatabase.map(

                faq => ({

                    "@type": "Question",

                    name: faq.question,

                    acceptedAnswer: {

                        "@type": "Answer",

                        text:

                            faq.answer
                                .replace(/\n/g, " ")
                                .replace(/•/g, "")

                    }

                })

            )

    };

    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{

                __html:

                    JSON.stringify(schema)

            }}
        />

    );

}