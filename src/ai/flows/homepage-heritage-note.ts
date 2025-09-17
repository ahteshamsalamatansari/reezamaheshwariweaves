'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate an inspiring 'Crafted in Maheshwar' heritage note for the homepage.
 *
 * The flow selects a relevant snippet from the brand's database of articles to engage and connect the shopper with the brand's mission and culture.
 *
 * @exports {
 *   generateHomepageHeritageNote: (input: GenerateHomepageHeritageNoteInput) => Promise<GenerateHomepageHeritageNoteOutput>;
 *   GenerateHomepageHeritageNoteInput: z.infer<typeof GenerateHomepageHeritageNoteInputSchema>;
 *   GenerateHomepageHeritageNoteOutput: z.infer<typeof GenerateHomepageHeritageNoteOutputSchema>;
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHomepageHeritageNoteInputSchema = z.object({
  articleSnippets: z
    .array(z.string())
    .describe('An array of article snippets from the brand database.'),
});
export type GenerateHomepageHeritageNoteInput = z.infer<
  typeof GenerateHomepageHeritageNoteInputSchema
>;

const GenerateHomepageHeritageNoteOutputSchema = z.object({
  heritageNote: z.string().describe('The selected heritage note to display.'),
});
export type GenerateHomepageHeritageNoteOutput = z.infer<
  typeof GenerateHomepageHeritageNoteOutputSchema
>;

export async function generateHomepageHeritageNote(
  input: GenerateHomepageHeritageNoteInput
): Promise<GenerateHomepageHeritageNoteOutput> {
  return homepageHeritageNoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'homepageHeritageNotePrompt',
  input: {schema: GenerateHomepageHeritageNoteInputSchema},
  output: {schema: GenerateHomepageHeritageNoteOutputSchema},
  prompt: `You are a content curator for Reeza Maheshwari Weaves, an Indian saree brand. Your task is to select the most inspiring and relevant heritage note from the following snippets to display on the homepage to engage customers and connect them with the brand's mission and culture.\n\nArticle Snippets:\n{{#each articleSnippets}}\n- {{{this}}}\n{{/each}}\n\nBased on the snippets, select one that highlights Maheshwar’s weaving heritage, its support for artisans, and its blend of tradition and modern elegance.  The selected snippet should be concise and captivating, making the customer want to learn more.\n\nJust return the content of the selected snippet.  Do not add any additional text or formatting.`,
});

const homepageHeritageNoteFlow = ai.defineFlow(
  {
    name: 'homepageHeritageNoteFlow',
    inputSchema: GenerateHomepageHeritageNoteInputSchema,
    outputSchema: GenerateHomepageHeritageNoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {heritageNote: output!.heritageNote};
  }
);
