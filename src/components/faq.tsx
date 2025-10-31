export const Faq = ({ blok }: any) => {
    
    return (
    <div>
         {blok.faq_card?.map((faq: any) => (
            <div key={faq._uid} className="p-4 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p  className="text-gray-600">{faq.answer}</p>
            </div>
         ))}
    </div>)
}