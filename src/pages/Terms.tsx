import React from 'react';
import { FileText, Scale, Gavel, AlertCircle, Mail, MapPin } from 'lucide-react';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';

export const Terms: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 max-w-4xl mx-auto py-12">
      <Reveal>
        <header className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <FileText size={14} /> Legal Terms
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">Terms of Service</h1>
          <p className="text-gray-400 font-mono text-sm tracking-tight">Last Updated: April 5, 2026</p>
        </header>
      </Reveal>

      <section className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
        <Reveal>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Scale className="text-purple-400" size={24} /> Overview
            </h2>
            <p>
              This website is operated by <strong>PUNIVERSE LTD</strong> (trading as “Puniverse”). Throughout the site, the terms “we”, “us” and “our” refer to PUNIVERSE LTD. Puniverse offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Section 1 - Online Store Terms</h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>
            <p>
              A breach or violation of any of the Terms will result in an immediate termination of your Services.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Section 2 - General Conditions</h3>
            <p>
              We reserve the right to refuse Service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Section 3 - Accuracy, Completeness and Timeliness</h3>
            <p>
              The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary sources of information. Any reliance on the material on this site is at your own risk.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Section 4 - Modifications to Service and Prices</h3>
            <p>
              Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Section 5 - Products or Services</h3>
            <p>
              Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Return & Refund Policy. We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Section 6 - Prohibited Uses</h3>
            <p>
              In addition to other prohibitions, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any regulations, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights; (e) to harass, abuse, insult, harm, defame, slander, or discriminate; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track personal information of others; (i) for any obscene or immoral purpose.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Gavel className="text-teal-400" size={24} /> Section 7 - Governing Law
            </h2>
            <p>
              These Terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>. You agree that the courts of England and Wales shall have exclusive jurisdiction.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <AlertCircle className="text-red-400" size={20} /> Limitation of Liability
            </h2>
            <p className="text-sm">
              In no case shall PUNIVERSE LTD, our directors, officers, employees, affiliates, or agents be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind resulting from your use of the service or products procured using the service.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white font-medium">Business Name</p>
                    <p className="text-sm text-gray-400">Puniverse (trading name of PUNIVERSE LTD)<br/>Company Number: 15999087</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-purple-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white font-medium">Customer Support</p>
                    <p className="text-sm text-gray-400">Email: support@puniverse.net<br/>Available: Mon-Fri, 9am - 6pm (UK)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
