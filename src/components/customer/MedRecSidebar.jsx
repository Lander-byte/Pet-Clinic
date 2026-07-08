import React from 'react';

function MedRecSidebar({ sections, activeSection, onSelect }) {
  return (
    <aside className="med-rec-sidebar">
      <h3 className="med-rec-sidebar-title">Records</h3>
      <nav>
        {sections.map(section => (
          <button
            key={section}
            className={`med-rec-sidebar-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => onSelect(section)}
          >
            {section}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default MedRecSidebar;
