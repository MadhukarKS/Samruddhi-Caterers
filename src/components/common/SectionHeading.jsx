import React from 'react';

export const SectionHeading = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  isDark = false,
  align = 'center',
  maxWidth = '720px',
  compact = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      style={{
        textAlign: isCentered ? 'center' : 'left',
        maxWidth,
        margin: isCentered
          ? compact
            ? '0 auto 1.75rem auto'
            : '0 auto 2.25rem auto'
          : compact
            ? '0 0 1.5rem 0'
            : '0 0 2rem 0',
      }}
    >
      {badgeText && (
        <div style={{ marginBottom: '0.65rem' }}>
          <span className={isDark ? 'badge-pill badge-dark' : 'badge-pill'}>
            {BadgeIcon && (
              <BadgeIcon
                size={12}
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
          fontSize: 'clamp(1.65rem, 3.2vw, 2.3rem)',
          color: isDark ? '#FFFFFF' : 'var(--color-text-main)',
          fontWeight: 700,
          lineHeight: 1.14,
          letterSpacing: '-0.028em',
          marginBottom: description ? '0.6rem' : 0,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '0.95rem',
            color: isDark ? 'var(--color-text-inverse-muted)' : 'var(--color-text-muted)',
            lineHeight: 1.6,
            maxWidth: '620px',
            margin: isCentered ? '0 auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
