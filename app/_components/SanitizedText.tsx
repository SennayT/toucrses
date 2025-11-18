"use client";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

export function SanitizedText({ text }: { text: string }) {
  // Sanitize the HTML string first
  const cleanHtml = DOMPurify.sanitize(text);

  const descriptionHtml = {
    __html: cleanHtml,
  };

  return (
    <p
      className="course-description"
      dangerouslySetInnerHTML={descriptionHtml}
    />
  );
}
