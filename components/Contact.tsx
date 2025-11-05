
import React from 'react';

const SocialLink: React.FC<{ href: string; icon: string; label: string }> = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-colors hover:bg-white/10"
      aria-label={label}
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  </li>
);

const Contact: React.FC = () => {
    return (
        <div>
            <h2 className="major text-2xl font-semibold uppercase tracking-[0.5rem] border-b border-white pb-2 mb-6">Contact</h2>
            <p>
                As a Data & ML Engineer, I specialize in building machine learning models that not only solve complex problems but also drive actionable insights. My work encompasses everything from data preprocessing and feature engineering to model evaluation and deployment.
            </p>
            <p className="mt-4">
                <a 
                    href="mailto:brandon.doey@icloud.com"
                    className="font-bold text-sky-300 border-b border-dotted border-sky-300/50 hover:border-sky-300/0 transition"
                >
                    Email me
                </a>
            </p>
            <ul className="flex space-x-3 mt-6">
              <SocialLink href="https://www.linkedin.com/in/bdoey" icon="fa-linkedin" label="LinkedIn" />
              <SocialLink href="https://github.com/bdoey" icon="fa-github" label="GitHub" />
              <SocialLink href="https://www.facebook.com/bdoey" icon="fa-facebook-f" label="Facebook" />
              <SocialLink href="https://twitter.com/bdoey" icon="fa-twitter" label="Twitter" />
            </ul>
        </div>
    );
};

export default Contact;
