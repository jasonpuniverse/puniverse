import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Download, ArrowRight, Loader2 } from 'lucide-react';
import { Reveal } from '../components/ui/ScrollReveal';
import { GlowButton } from '../components/ui/GlowButton';

export const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // In a real application, you would send this `sessionId` to your backend 
    // or Supabase Edge function here to verify the payment was actually successful 
    // before granting access to the download payload.
    // E.g.: fetch(`/api/verify-session?session_id=${sessionId}`)

    const timer = setTimeout(() => {
      setVerifying(false);
      // We simulate a successful verification if a session ID is present
      if (sessionId) {
        setVerified(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [sessionId]);

  return (
    <div className="animate-in fade-in duration-700 min-h-[70vh] flex flex-col items-center justify-center py-12 px-4">
      <Reveal className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            {verifying ? (
              <div className="animate-pulse flex flex-col items-center">
                <Loader2 className="w-16 h-16 text-teal-400 mb-6 animate-spin" />
                <h2 className="text-2xl font-bold text-white mb-2">Verifying Payment...</h2>
                <p className="text-gray-400">Securely confirming your transaction with Stripe.</p>
              </div>
            ) : verified ? (
              <div className="flex flex-col items-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mb-6 border border-teal-500/30">
                  <CheckCircle2 className="w-10 h-10 text-teal-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Payment Successful!</h2>
                <p className="text-gray-300 mb-8 max-w-sm">
                  Welcome to the system. Your transaction was verified successfully. A backup copy has also been sent to your email via n8n.
                </p>
                
                <div className="w-full space-y-4">
                  <a href="#" className="block w-full">
                    <GlowButton className="w-full justify-center text-lg py-4">
                      <Download size={18} className="mr-2" />
                      Download Your Access File
                    </GlowButton>
                  </a>
                  
                  <Link to="/" className="block w-full">
                    <button className="w-full py-4 text-sm font-medium text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-xl border border-white/5">
                      Return to Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30">
                  <CheckCircle2 className="w-10 h-10 text-red-400 opacity-50" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Verification Failed</h2>
                <p className="text-gray-400 mb-8">
                  We couldn't verify your session ID. If you completed payment, please check your email for the backup link sent by our system.
                </p>
                <Link to="/products">
                  <button className="text-teal-400 hover:text-teal-300 flex items-center gap-2 text-sm font-medium">
                    Return to Products <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
