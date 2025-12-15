'use server';
/**
 * @fileOverview This file contains the Genkit flow for translating and understanding search queries in multiple languages.
 *
 * It includes:
 * - translateAndUnderstandSearchQuery: The main function to translate and understand the search query.
 * - TranslateAndUnderstandSearchQueryInput: The input type for the translateAndUnderstandSearchQuery function.
 * - TranslateAndUnderstandSearchQueryOutput: The output type for the translateAndunderstandSearchQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateAndUnderstandSearchQueryInputSchema = z.object({
  query: z.string().describe('The search query in Amharic, Tigrinya, Oromo, or English.'),
  language: z
    .string() 
    .optional()   
    .describe('The language of the search query.  If omitted, the system will attempt to auto-detect.'),
});
export type TranslateAndUnderstandSearchQueryInput = z.infer<
  typeof TranslateAndUnderstandSearchQueryInputSchema
>;

const TranslateAndUnderstandSearchQueryOutputSchema = z.object({
  translatedQuery: z
    .string()
    .describe('The translated search query in English.'),
  understoodQuery: z
    .string()
    .describe(
      'A comma-separated list of standard product keywords extracted from the query.'
    ),
});
export type TranslateAndUnderstandSearchQueryOutput = z.infer<
  typeof TranslateAndUnderstandSearchQueryOutputSchema
>;

export async function translateAndUnderstandSearchQuery(
  input: TranslateAndUnderstandSearchQueryInput
): Promise<TranslateAndUnderstandSearchQueryOutput> {
  return translateAndUnderstandSearchQueryFlow(input);
}

const translateAndUnderstandSearchQueryPrompt = ai.definePrompt({
  name: 'translateAndUnderstandSearchQueryPrompt',
  input: {schema: TranslateAndUnderstandSearchQueryInputSchema},
  output: {schema: TranslateAndUnderstandSearchQueryOutputSchema},
  prompt: `You are an expert in understanding conversational search queries for an e-commerce platform in Ethiopia.

The user will provide a search query in Amharic, Tigrinya, Oromo, or English. It may be a simple keyword or a full sentence. Your task is to:
1.  Translate the entire query to English.
2.  Identify the key products or items the user is looking for.
3.  Map any colloquial or local terms to standard, generic English product names.
4.  Extract these standard product names into a simple, comma-separated list of keywords.

Original Query: {{{query}}}
Language: {{{language}}}

Examples:
- If the user searches for "buna", the understood query should be "coffee".
- If the user searches for "I need to buy some dabo for breakfast", the understood query should be "bread".
- If the user asks "Can I find fresh tomatoes and onions?", the understood query should be "tomato, onion".

Output:
Provide a JSON object with 'translatedQuery' (the full English translation) and 'understoodQuery' (the comma-separated keywords).
`,
});

const translateAndUnderstandSearchQueryFlow = ai.defineFlow(
  {
    name: 'translateAndUnderstandSearchQueryFlow',
    inputSchema: TranslateAndUnderstandSearchQueryInputSchema,
    outputSchema: TranslateAndUnderstandSearchQueryOutputSchema,
  },
  async input => {
    const {output} = await translateAndUnderstandSearchQueryPrompt(input);
    return output!;
  }
);
