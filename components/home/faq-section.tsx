"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes our supplements different from others?",
    answer: "Our supplements are manufactured in GMP-certified facilities and undergo rigorous third-party testing. We use premium ingredients and maintain strict quality control standards to ensure the highest quality products for our customers."
  },
  {
    question: "How do I know which supplements are right for me?",
    answer: "We recommend consulting with your healthcare provider before starting any supplement regimen. Our website provides detailed information about each product's benefits and ingredients to help you make an informed decision."
  },
  {
    question: "What is your shipping policy?",
    answer: "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, while express shipping is available for next-day delivery. All orders are carefully packaged to ensure product integrity."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping policy page for specific details about your country."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all unopened products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Opened products may be eligible for store credit."
  }
]

export function FAQSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 