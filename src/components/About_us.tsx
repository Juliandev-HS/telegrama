export const About_us = ({ blok }: any) => {
    
    return (<div className="p-4 border rounded-lg shadow-sm">
       <h3 className="text-lg font-semibold mb-2">{blok.about_title}</h3>
       <p className="text-gray-600">{blok.about_text_main}</p>
       <br/>
       <p className="text-gray-600">{blok.about_text_secondary}</p>
    </div>)
}