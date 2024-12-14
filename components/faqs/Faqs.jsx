import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Faqs() {
    const faqs = [

        {
            question: "Do I need to pay to list my account for sale?",
            answer: "Listing your account is free. However, a small commission may be charged when the account is sold successfully.",
        },
        {
            question: "How can I buy an account?",
            answer: "1. Browse the listings available on our platform.\n2. Click on the 'Buy Now' or 'Contact Seller' button to initiate a conversation.\n3. Use the escrow service for secure payment and account transfer.",
        },
        {
            question: "Can I negotiate the price with the seller?",
            answer: "Yes, you can contact the seller directly via our chat feature to negotiate the price or discuss any other details.",
        },
        {
            question: "What happens if the seller doesn’t deliver the account after payment?",
            answer: "We recommend using our escrow service to ensure your payment is held securely until the account transfer is completed. If issues arise, our support team will assist you in resolving them.",
        },
        {
            question: "How do I list my account for sale?",
            answer: "1. Register on our platform.\n2. Click on 'Create Listing' and provide details about the account, including price, followers/subscribers, engagement stats, and more.\n3. Submit your listing for approval.",
        },
        {
            question: "How will I get paid for my sale?",
            answer: "Once the buyer confirms the successful transfer of the account, the payment held in escrow will be released to you.",
        },
        {
            question: "What is an escrow service?",
            answer: "Our escrow service acts as a trusted third party that holds the payment until the transaction is completed successfully. This protects both the buyer and the seller.",
        },
    ];

    return (
        <div className="px-5 md:px-28 py-5 md:py-10 bg-background pb-14">
        <h2 className="text-center text-2xl font-semibold md:text-4xl py-5 text-primary-800">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
                {faqs.map((ele, index) => (
                    <AccordionItem
                        value={++index}
                        key={index}
                    >
                        <AccordionTrigger className="text-md font-semibold text-gray-600 hover:text-primary transition-all">
                            {ele.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-4 py-1 rounded-md">
                            <p className=" text-md text-gray-600">{ele.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>

    );
}
