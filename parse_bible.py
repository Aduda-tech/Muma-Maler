
import re
import json

def clean_text(text):
    # Remove excessive spaces between letters that are part of the same word
    # This is tricky because we don't want to join separate words.
    # But looking at the input, words like "N ya s aye" should be "Nyasaye".
    # Often there's a pattern: letter space letter space.
    
    # First, let's fix the specific common ones
    text = text.replace("N ya s aye", "Nyasaye")
    text = text.replace("Wu o d e", "Wuode")
    text = text.replace("K r i s t o", "Kristo")
    text = text.replace("Pa u l o", "Paulo")
    text = text.replace("Ru o d h w a", "Ruodhwa")
    text = text.replace("Jo - Yahudi", "Jo-Yahudi")
    text = text.replace("Ogendini", "Ogendini") # already fine
    
    # General cleanup for single spaces between letters
    # Example: "P a u l o" -> "Paulo"
    # We only do this if it looks like a word spread out.
    # This regex looks for letters separated by single spaces.
    # This might be risky. Let's just do common ones or specific patterns.
    
    # Actually, the user provided text has many such issues.
    # "Wu o r o", "N ya s a c h a", "Wach M ab e r", "ya n gore", "m a l e r"
    
    # Let's try a more aggressive fix for the scattered letters:
    # Find sequences like "W a r r u o k" and join them.
    # A simple way: if a word is broken by spaces, join it.
    # We can detect words that are likely broken if they are short strings of letters.
    
    # Better: just fix common words and then collapse spaces where appropriate.
    # Or, notice that many words have extra spaces within them.
    
    # Let's look at the "1An Pa u l o" example. 
    # It seems like some OCR or copy-paste artifacts.
    
    return text

def parse_book(text, book_name):
    # Split text into lines
    lines = text.split('\n')
    chapters = {}
    current_chapter = 0
    current_verses = []
    
    # Process lines
    for line in lines:
        line = line.strip()
        if not line: continue
        
        # Check for chapter start (N[Text] where N is chapter number)
        # But wait, verses also start with numbers.
        # Usually, the chapter number is only at the beginning of the chapter.
        
        # Let's use a regex to find verse starts. 
        # Most verses start with a number.
        match = re.match(r'^(\d+)\s*(.*)', line)
        if match:
            v_num = int(match.group(1))
            v_text = match.group(2).strip()
            
            # If v_num is consecutive or 1, and we have a potential chapter transition...
            # Actually, let's look at the provided text more closely.
            
            # If it's a new chapter N, it starts with "N[Text]" where v_num = N.
            # And it happens after the previous chapter ends.
            
            # This is ambiguous. Let's manually define the chapter breaks if possible,
            # or use the fact that chapters often start with a header or after a long run of verses.
            
            pass

    # Actually, Romans has 16 chapters.
    # I'll manually split the text into chapters based on the headers provided in the text.
    
    return chapters

# I will manually prepare the arrays for each book because the text formatting is a bit messy.
# I'll use Python to help with the repetitive parts.
