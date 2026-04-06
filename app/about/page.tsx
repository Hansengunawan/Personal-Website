import SocialButton from "../components/ui/SocialButton";


export default function About() {
    return(
        <section className="flex py-5 scroll-mt-20" id="about">
            <div className="flex flex-col px-12">
                <div>
                    <h1 className="text-2xl font-semibold mb-3">ABOUT</h1>
                    <p className="justify-center"> I am a Computer Science graduate from Esa Unggul University with a focus on Data Analytics and Web Development. I am skilled at transforming operational and sales data into meaningful insights, and I have experience ensuring data accuracy, preparing reports, and supporting business needs through a data-driven approach. Additionally, I have experience in web development using modern technologies to build functional digital solutions. I am proficient in Microsoft Excel, SQL, and Python, and have experience in machine learning techniques such as K-Means, SVM, and forecasting models. On the web development side, I am familiar with HTML, CSS, JavaScript, and React. I am detail-oriented, adaptable, and highly motivated to learn, with the goal of continuously growing in creating data-driven and technology-based solutions.
                    </p>
                    <div className="mt-2">
                        <h3 className="mb-2 italic text-gray-600">Let&apos;s Connect With Me</h3>
                        <div className="flex gap-4">
                        <SocialButton type="cv" url="/CV_HANSEN_26(EN).pdf"/>
                        <SocialButton 
                        type="instagram"
                        url="https://instagram.com/hnsn_07"/>
                        <SocialButton
                        type="linkedin"
                        url="https://linkedin.com/in/Hansen-"/>
                        <SocialButton
                        type="github"
                        url="https://github.com/Hansengunawan"/>
                        <SocialButton 
                        type="whatsapp" 
                        url="https://wa.me/6281280331221"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}