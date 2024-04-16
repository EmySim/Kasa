import React, { useState } from 'react';

function Collapse() {
  // Déclaration de l'état isCollapsed avec une valeur par défaut de false
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      petit texte pour voir composant collapse
    </div>
  );
}

export default Collapse;
