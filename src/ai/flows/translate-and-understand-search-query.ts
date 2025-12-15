'use server';
/**
 * @fileOverview This file contains the Genkit flow for translating and understanding search queries in multiple languages.
 *
 * It includes:
 * - translateAndUnderstandSearchQuery: The main function to translate and understand the search query.
 * - TranslateAndUnderstandSearchQueryInput: The input type for the translateAndUnderstandSearchQuery function.
 * - TranslateAndUnderstandSearchQueryOutput: The output type for the translateAndUnderstandSearchQuery function.
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
      'The understood search query, mapping colloquial terms to standard product names.'
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
  prompt: `You are an expert in understanding and translating search queries for an e-commerce platform in Ethiopia.

The user will provide a search query in Amharic, Tigrinya, Oromo, or English. Your task is to first translate the query to English and then map colloquial terms to standard product names.

Original Query: {{{query}}}
Language: {{{language}}}

Translation and Understanding:
- Translate the query to English.
- Map any colloquial terms to their standard product names.
- Provide the translated and understood query.

Output:
Translated Query: The translated search query in English.
Understood Query: The understood search query, mapping colloquial terms to standard product names.
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
