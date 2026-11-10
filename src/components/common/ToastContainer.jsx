import React from 'react';
import { useApp } from '../../hooks/useApp';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      className="toast-container"
      style={{
        position: 'fixed',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem',
        maxWidth: '420px',
        width: 'calc(100% - 2.5rem)',
        pointerEvents: 'none',
      }}
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              backgroundColor: '#162235',
              color: '#F1F5F9',
              border: '1px solid #2D405E',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 1.15rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              animation: 'toastSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {isSuccess && <CheckCircle2 size={17} color="#4ADE80" style={{ flexShrink: 0 }} />}
              {isWarning && <AlertTriangle size={17} color="#FBBF24" style={{ flexShrink: 0 }} />}
              {!isSuccess && !isWarning && <Info size={17} color="#E09132" style={{ flexShrink: 0 }} />}

              <span style={{ fontSize: '0.86rem', fontWeight: 500, lineHeight: 1.4 }}>
                {toast.message}
              </span>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.2rem',
              }}
              aria-label="Dismiss notification"
            >
              <X size={15} />
            </button>
          </div>
        );
      })}

      <style>{`
        .toast-container {
          bottom: 2rem;
          right: 2rem;
        }
        @media (max-width: 768px) {
          .toast-container {
            bottom: 5.5rem;
            right: 1.25rem;
          }
        }
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
