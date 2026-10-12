export const WHATSAPP_PHONE_NUMBER = '918310589119';

export interface WhatsAppMessageOptions {
  intent?: 'trial' | 'curriculum' | 'fees' | 'general' | 'custom';
  parentName?: string;
  studentName?: string;
  studentGrade?: string;
  subjectInterest?: string;
  preferredDate?: string;
  preferredTime?: string;
  customMessage?: string;
}

/**
 * Builds a formatted message for WhatsApp direct sending
 */
export function buildCustomWhatsAppMessage(options: WhatsAppMessageOptions): string {
  const {
    intent = 'trial',
    parentName,
    studentName,
    studentGrade,
    subjectInterest,
    preferredDate,
    preferredTime,
    customMessage
  } = options;

  if (intent === 'custom' && customMessage) {
    return customMessage.trim();
  }

  const lines: string[] = [];

  if (intent === 'trial') {
    lines.push("Hi Aishwarya ma'am! I would like to schedule a 1-on-1 coding trial class for my child.");
    lines.push('');
    if (studentName) lines.push(`*Student:* ${studentName} ${studentGrade ? `(${studentGrade})` : ''}`);
    else if (studentGrade) lines.push(`*Grade:* ${studentGrade}`);
    if (subjectInterest) lines.push(`*Focus Area:* ${subjectInterest}`);
    if (preferredDate) lines.push(`*Preferred Date:* ${preferredDate}`);
    if (preferredTime) lines.push(`*Preferred Time:* ${preferredTime}`);
    if (parentName) lines.push(`*Parent:* ${parentName}`);
    if (customMessage) lines.push(`*Note:* ${customMessage}`);
    lines.push('');
    lines.push('Could you please let me know your available slots and share the meeting link?');
  } else if (intent === 'curriculum') {
    lines.push("Hi Aishwarya ma'am! I came across your educator website and would like details about your coding curriculum.");
    lines.push('');
    if (studentGrade) lines.push(`*Grade Level:* ${studentGrade}`);
    if (subjectInterest) lines.push(`*Interested In:* ${subjectInterest}`);
    if (parentName) lines.push(`*Parent:* ${parentName}`);
    if (customMessage) lines.push(`*Questions:* ${customMessage}`);
    lines.push('');
    lines.push('Could you share the syllabus, sample projects, and learning roadmap?');
  } else if (intent === 'fees') {
    lines.push("Hi Aishwarya ma'am! I would like to inquire about fee structures and batch timings for online coding sessions.");
    lines.push('');
    if (studentGrade) lines.push(`*Student Grade:* ${studentGrade}`);
    if (parentName) lines.push(`*Parent:* ${parentName}`);
    if (customMessage) lines.push(`*Specific Requirement:* ${customMessage}`);
    lines.push('');
    lines.push('Please let me know about 1-on-1 options, package details, and available weekend/weekday batches.');
  } else {
    // General
    lines.push("Hi Aishwarya ma'am! I am reaching out from your portfolio website to connect regarding online coding classes.");
    if (parentName) lines.push(`*Parent:* ${parentName}`);
    if (customMessage) lines.push(`*Message:* ${customMessage}`);
    lines.push('');
    lines.push('Looking forward to speaking with you!');
  }

  return lines.filter((l, i, arr) => !(l === '' && arr[i - 1] === '')).join('\n');
}

/**
 * Builds full wa.me direct URL with encoded message
 */
export function getDirectWhatsAppUrl(options: WhatsAppMessageOptions | string): string {
  const message = typeof options === 'string' ? options : buildCustomWhatsAppMessage(options);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-defined quick messages
 */
export const QUICK_WHATSAPP_TEMPLATES = [
  {
    id: 'trial',
    title: 'Trial Class Booking',
    description: 'Reserve a 1-on-1 trial slot for your child',
    defaultGrade: 'Grades 5–8',
    defaultSubject: 'Python & Algorithmic Logic'
  },
  {
    id: 'curriculum',
    title: 'Curriculum & Tools',
    description: 'Ask about Scratch, App Inventor, Python or Web Dev',
    defaultGrade: 'Grades 1–4',
    defaultSubject: 'Block Coding & Game Design'
  },
  {
    id: 'fees',
    title: 'Fees & Timings',
    description: 'Inquire about schedules, pricing & batch formats',
    defaultGrade: 'Grades 5–8',
    defaultSubject: '1-on-1 Virtual Coding Classes'
  },
  {
    id: 'custom',
    title: 'Custom Inquiry',
    description: 'Write your own personalized message directly',
    defaultGrade: 'Grades 9–12',
    defaultSubject: 'Advanced Computer Science & Web Dev'
  }
];
