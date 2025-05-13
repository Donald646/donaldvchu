import React from 'react';

interface PortfolioItemCardProps {
  title: string;
  subtitle?: string;
  secondaryTitle?: string;
  dates?: string;
  description?: string | null;
  details?: string[];
  link?: string;
  linkText?: string;
  tags?: string[];
}

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({
  title,
  subtitle,
  secondaryTitle,
  dates,
  description,
  details,
  link,
  linkText = 'Learn More',
  tags,
}) => {
  return (
    <div className="portfolio-item-card bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="portfolio-item-card-header mb-3">
        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
          <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
          {dates && <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{dates}</span>}
        </div>
        {subtitle && <p className="text-md font-medium text-primary mb-1">{subtitle}</p>}
        {secondaryTitle && <p className="text-sm text-muted-foreground italic mb-2">{secondaryTitle}</p>}
      </div>

      {description && <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{description}</p>}

      {details && details.length > 0 && (
        <ul className="portfolio-item-card-details space-y-2 text-sm text-muted-foreground mb-4">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">&#8227;</span> {/* Custom bullet */}
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {(link || tags) && (
        <div className="portfolio-item-card-footer flex flex-wrap items-center gap-3 mt-auto pt-3 border-t border-border">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              {linkText}
            </a>
          )}
          {tags && tags.length > 0 && (
             <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioItemCard; 