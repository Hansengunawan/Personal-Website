// import { FaBriefcase, FaChartBar } from "react-icons/fa";

export default function ExperienceSection() {
    return (
    <section className="px-12 scroll-mt-20" id="experience">
        <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>

        <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT TOP */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-lg">
            PT Delta Kapuas Suksesindo
            </h3>
            <p className="text-sm text-gray-600">
            Customer Service & Sales Admin
            </p>
            <p className="text-sm text-blue-800 mb-3">
            Jun 2024 – Des 2025
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Processing and compiling weekly and monthly sales data (50+ transactions) using Excel for sales reporting</li>
                <li>Managed 20–30 daily customer inquiries and analyzing potential customer leads</li>
                <li>Processing sales documents such as invoices, delivery notes, and advance payment receipts using Accurate software</li>
                <li>Supporting sales activities by preparing product data and product samples for 10+ customer projects</li>
                <li>Monitored 1,000+ inventory records to maintain warehouse stock accuracy</li>
                <li>Assisted with 5–10 weekly site surveys to support sales operations</li>
            </ul>
        </div>

        {/* RIGHT TOP */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-lg">PT Eurotek</h3>
            <p className="text-sm text-gray-600">
            Operations Administrator
            </p>
            <p className="text-sm text-blue-800 mb-3">
            Apr 2023 – Feb 2024
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Managed and updated a database 100+ customers and products using Microsoft Excel every month</li>
                <li>Conducted periodic inventory counts over 50+ items to ensure inventory data matched the physical conditions in the warehouse</li>
                <li>Processed operational data to support weekly scheduling for a 5-person field team</li>
                <li>Generated operational reports in Excel to monitor project progress</li>
                <li>Communicate with customers regarding payment follow-ups and product updates.</li>
            </ul>
        </div>

        {/* Left BOTTOM */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-lg">PT Anugerah Baja Makmur</h3>
            <p className="text-sm text-gray-600">Accounts Receivable Admin</p>
            <p className="text-sm text-blue-800 mb-3">Jun 2022 – Nov 2022</p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Processed 100+ monthly invoice and sales transactions using the IPOS system</li>
                <li>Enter and verify 50+ tax invoices per month to ensure the accuracy of the company’s transaction data</li>
                <li>Prepared monthly AR reports in Excel to monitor customer payment status</li>
                <li>Reconciled payment data via CIMB Internet Banking with AR records</li>
            </ul>
        </div>
        
        {/* RIGHT BOTTOM */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-lg">PT PRO SOUND INDONESIA</h3>
            <p className="text-sm text-gray-600">Accounting Admin</p>
            <p className="text-sm text-blue-800 mb-3">Jan 2022 – May 2022</p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Managed 100+ inventory data entries and ensured stock accuracy using Excel</li>
                <li>Handled daily petty cash (10–20 transactions) with accurate financial tracking</li>
                <li>Processed 50+ weekly invoices and sales transactions with minimal errors</li>
                <li>Monitored accounts receivable for 50+ customers to support timely collections</li>
            </ul>
        </div>

        </div>
    </section>
    );
}