import { config } from 'dotenv';
config();

import '@/ai/flows/generate-assignment-summaries.ts';
import '@/ai/flows/suggest-community-posts.ts';
import '@/ai/flows/smart-navigation-suggestions.ts';
import '@/ai/flows/summarize-daily-pulse.ts';
import '@/ai/flows/summarize-mails.ts';
