"use client";

import { useGlobalState } from '../../contexts/GlobalStateContext';
import Close from '../navigation/menu/elements/Close';
import AnimatedBlurryBg from '../animation/AnimatedBlurryBg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalState();
  const [member, setMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const handleShowMember = (e: CustomEvent<TeamMember>) => setMember(e.detail);
    window.addEventListener('show-team-member', handleShowMember as EventListener);
    return () => window.removeEventListener('show-team-member', handleShowMember as EventListener);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'modal-backdrop') {
      toggleModal();
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && member && (
        <AnimatedBlurryBg isVisible={isModalOpen}>
          <div
            id="modal-backdrop"
            className="fixed inset-0 z-[100] bg-black bg-opacity-30 flex justify-end"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full sm:w-1/2 lg:w-2/3 xl:w-3/4 h-screen bg-white shadow-lg z-[101] relative overflow-y-auto"
            >
              <div className="bg-[#9C2F2E] text-white p-4 flex justify-between items-center sticky top-0 z-[102]">
                <div>
                  <h1 className="text-2xl font-bold">{member.name}</h1>
                  <h2 className="text-lg font-semibold">{member.role}</h2>
                </div>
                <button onClick={toggleModal} className="text-white">
                  <Close />
                </button>
              </div>

              <div className="p-6">
                {member.description.split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-800 whitespace-pre-line mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedBlurryBg>
      )}
    </AnimatePresence>
  );
};

export default Modal;
