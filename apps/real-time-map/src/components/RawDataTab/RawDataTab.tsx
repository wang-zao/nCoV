import React, { useEffect, useState } from 'react';
import { Case } from '@ncov/api-interfaces';
import apiClient from '../../utils/apiClient';

export const RawDataTab = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    apiClient('/cases')
      .then(apiClient.fallbackSuccessHandler)
      .then(setCases);
  }, []);

  return (
    <>
      <ul>
        {cases.map((c) => (
          <li key={c.id}>{c.province} - {c.city} - {c.county} - {c.amount}例</li>
        ))}
      </ul>
    </>
  );
};

export default RawDataTab;
