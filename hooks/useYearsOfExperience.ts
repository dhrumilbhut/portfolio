"use client";

import { useEffect, useState } from "react";
import { yearsOfExperience } from "@/lib/site";

// Starts from the value the server rendered (so hydration matches exactly),
// then recomputes from the visitor's clock after mount, so the figure stays
// current even if the static page was generated before a half-year boundary.
export function useYearsOfExperience(serverYears: number): number {
  const [years, setYears] = useState(serverYears);
  useEffect(() => setYears(yearsOfExperience()), []);
  return years;
}
