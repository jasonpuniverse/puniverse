import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, MapPin } from 'lucide-react';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';
import { GlassCard } from '../components/ui/GlassCard';

export const Privacy: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 max-w-4xl mx-auto py-12">
      <Reveal>
        <header className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-6 uppercase tracking-widest">
            <Shield size={14} /> Legal & Privacy
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-[var(--color-text-secondary)] font-mono text-sm tracking-tight">Last Updated: April 5, 2026</p>
        </header>
      </Reveal>

      <section className="space-y-12 text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
        <Reveal>
          <div className="space-y-6">
            <p>
              PUNIVERSE LTD (company number: 15999087) operates this store and website under the branding <strong>Puniverse</strong> (including all related information, content, features, tools, products and services). In order to provide you, the customer, with a curated shopping and automation experience (the "Services"), our store is powered by Shopify, which enables us to provide the Services to you.
            </p>
            <p>
              This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us. If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information.
            </p>
            <p>
              Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge that you have read this Privacy Policy and understand the collection, use, and disclosure of your information as described in this Privacy Policy.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <GlassCard className="p-8 md:p-10 border-[var(--color-border)] bg-[var(--color-surface)]">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
              <Eye className="text-teal-400" size={24} /> 1. Personal Information We Collect
            </h2>
            <p className="mb-4">We may collect or process the following categories of personal information, depending on how you interact with the Services:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
              {[
                { label: "Contact Details", desc: "Name, address, billing/shipping address, phone, and email." },
                { label: "Financial Data", desc: "Encoded payment card details and transaction history." },
                { label: "Account Info", desc: "Usernames, passwords, security questions, and settings." },
                { label: "Transaction Data", desc: "Items viewed, cart activity, purchases, and returns." },
                { label: "Communications", desc: "Customer support inquiries and feedback." },
                { label: "Technical Data", desc: "Device Type, IP address, and interaction analytics." }
              ].map((item, idx) => (
                <li key={idx} className="p-4 rounded-xl bg-[var(--color-surface-hover)] border border-[var(--color-border)]">
                  <span className="block text-[var(--color-text-primary)] font-medium mb-1">{item.label}</span>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{item.desc}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] flex items-center gap-3">
              <Lock className="text-purple-400" size={24} /> 2. How We Use Your Information
            </h2>
            <p>Depending on how you interact with us, we may use personal information for the following purposes:</p>
            <ul className="space-y-6 pl-4 border-l border-[var(--color-border)] mt-6">
              <li>
                <strong className="text-[var(--color-text-primary)]">Providing the Services:</strong> Processing payments, fulfilling orders, and performance of our contract with you.
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">Marketing & Advertising:</strong> We may share limited customer and event data with advertising partners including TikTok, Meta, and Google to measure performance and deliver relevant ads. This is based on your consent or our legitimate interest.
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">Security & Fraud Prevention:</strong> Authenticating accounts, securing shopping experiences, and detecting malicious activity.
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">Legal Obligations:</strong> Compliance with UK tax and regulatory requirements.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] flex items-center gap-3">
               <FileText className="text-blue-400" size={24} /> 3. Data Disclosures & Shopify
            </h2>
            <p>
              In certain circumstances, we may disclose your personal information to third parties for legitimate purposes. This includes Shopify (our hosting platform), payment processors (Stripe/PayPal), and analytics providers.
            </p>
            <p>
              The Services are hosted by <strong>Shopify</strong>, which collects and processes personal information about your access to and use of the Services in order to provide and improve the Services. For more details, visit the Shopify Consumer Privacy Policy.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="p-8 rounded-2xl border border-teal-500/20 bg-teal-500/5">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">4. Your Rights and Choices</h2>
            <p className="mb-4">
              Under UK and EU GDPR, you may have the right to access, delete, correct, or restrict the processing of your personal information. To exercise your rights, please contact us at the details below.
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] italic">
              Transaction and accounting data may be retained for up to seven years to meet legal and tax obligations.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="pt-12 border-t border-[var(--color-border)]">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">Contact & Legal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-teal-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-[var(--color-text-primary)] font-medium">Registered Office</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">PUNIVERSE LTD<br/>71–75 Shelton Street, Covent Garden<br/>London, WC2H 9JQ, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-teal-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-[var(--color-text-primary)] font-medium">Compliance Details</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Company Number: 15999087<br/>ICO Registration: ZB800134</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-teal-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-[var(--color-text-primary)] font-medium">Email Inquiries</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Privacy: privacy@puniverse.net<br/>Support: support@puniverse.net</p>
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
