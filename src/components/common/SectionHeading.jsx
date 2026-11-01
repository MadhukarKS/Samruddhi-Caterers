import React from 'react';

export const SectionHeading = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  isDark = false,
  align = 'center',
  maxWidth = '780px',
}) => {
  const isCentered = align === 'center';

  return (
    <div
      style={{
        textAlign: isCentered ? 'center' : 'left',
        maxWidth,
        margin: isCentered ? '0 auto 3.25rem auto' : '0 0 3.25rem 0',
      }}
    >
      {badgeText && (
        <div style={{ marginBottom: '1rem' }}>
          <span className={isDark ? 'badge-pill badge-dark' : 'badge-pill'}>
            {BadgeIcon && (
              <BadgeIcon
                size={13}
                color={isDark ? '#FFFFFF' : 'var(--color-terracotta)'}
              />
            )}
            <span>{badgeText}</span>
          </span>
        </div>
      )}

      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.9rem, 3.8vw, 2.75rem)',
          color: isDark ? '#FFFFFF' : 'var(--color-text-main)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: isDark ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)',
            lineHeight: 1.72,
            maxWidth: '680px',
            margin: isCentered ? '0 auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
