
import re

def clean_spacing(text):
    # Common artifacts in the provided text
    text = text.replace("N ya s aye", "Nyasaye")
    text = text.replace("N ya s a y e", "Nyasaye")
    text = text.replace("N y a s a y e", "Nyasaye")
    text = text.replace("N y a s a c h a", "Nyasacha")
    text = text.replace("N y a s a c h w a", "Nyasachwa")
    text = text.replace("Ye s u", "Yesu")
    text = text.replace("Ye s u s", "Yesus")
    text = text.replace("K r i s t o", "Kristo")
    text = text.replace("Pa u l o", "Paulo")
    text = text.replace("P a u l o", "Paulo")
    text = text.replace("Ru o d h w a", "Ruodhwa")
    text = text.replace("Wa c h M ab e r", "Wach Maber")
    text = text.replace("Wa c h M a b e r", "Wach Maber")
    text = text.replace("I n j i l i", "Injili")
    text = text.replace("m a l e r", "maler")
    text = text.replace("l e r", "ler")
    text = text.replace("ke n d o", "kendo")
    text = text.replace("ke n d e", "kende")
    text = text.replace("m a n a", "mana")
    text = text.replace("m a n g ' e n y", "mang'eny")
    text = text.replace("m a n a d e", "manade")
    text = text.replace("m a g e", "mage")
    text = text.replace("m a r a", "mara")
    text = text.replace("m a r i", "mari")
    text = text.replace("m a r e", "mare")
    text = text.replace("n i ke c h", "nikech")
    text = text.replace("n i ke c h", "nikech")
    text = text.replace("n i k e c h", "nikech")
    text = text.replace("d o n g e", "donge")
    text = text.replace("o m i yo", "omiyo")
    text = text.replace("O m i yo", "Omiyo")
    text = text.replace("o m i y o", "omiyo")
    text = text.replace("c h u n y", "chuny")
    text = text.replace("c h u n y gi", "chunygi")
    text = text.replace("c h u n y g i", "chunygi")
    text = text.replace("r i n g r u o k", "ringruok")
    text = text.replace("r i n g r e", "ringre")
    text = text.replace("r i n g r a", "ringra")
    text = text.replace("w a r r u o k", "warruok")
    text = text.replace("w a r r u o k", "warruok")
    text = text.replace("w a r r u o k", "warruok")
    text = text.replace("w a r r u o k", "warruok")
    text = text.replace("w a r r u o k", "warruok")
    text = text.replace("a d i e r a", "adiera")
    text = text.replace("m i r i a m b o", "miriambo")
    text = text.replace("w u o n d", "wuond")
    text = text.replace("w u o n d o", "wuondo")
    text = text.replace("n y a k w a r", "nyakwar")
    text = text.replace("m o s e c h w e yo", "mosechweyo")
    text = text.replace("m a c h a lo", "machalo")
    text = text.replace("f w e n yore", "fwenyore")
    text = text.replace("f w e n y o r e", "fwenyore")
    text = text.replace("ya n gore", "yangore")
    text = text.replace("y a n g o r e", "yangore")
    text = text.replace("c h o d e", "chode")
    text = text.replace("o w ruok", "owruok")
    text = text.replace("ke t h ruok", "kethruok")
    text = text.replace("ke t h og i n o", "kethogino")
    text = text.replace("r i e ko", "rieko")
    text = text.replace("o f u w o", "ofuwo")
    text = text.replace("t e k o", "teko")
    text = text.replace("t e k o", "teko")
    text = text.replace("t e k o", "teko")
    text = text.replace("r a t i r o", "ratiro")
    text = text.replace("M o k u o n go", "Mokuongo")
    text = text.replace("m o k u o n g o", "mokuongo")
    text = text.replace("w u o n w a", "wuonwa")
    text = text.replace("w u o r o", "wuoro")
    text = text.replace("w u o d e", "wuode")
    text = text.replace("w u o d a", "wuoda")
    text = text.replace("w u o d i", "wuodi")
    text = text.replace("w u o d", "wuod")
    text = text.replace("n y a m i n", "nyamin")
    text = text.replace("r u o t h", "ruoth")
    text = text.replace("R u o t h", "Ruoth")
    text = text.replace("l a m o", "lamo")
    text = text.replace("l a m o", "lamo")
    text = text.replace("l e m o", "lemo")
    text = text.replace("h e r a", "hera")
    text = text.replace("h e r a", "hera")
    text = text.replace("m a l i t", "malit")
    text = text.replace("m a s i r a", "masira")
    text = text.replace("c h a n d r u o k", "chandruok")
    text = text.replace("r i c h o", "richo")
    text = text.replace("r i c h o g i", "richogi")
    text = text.replace("r i c h o n e", "richone")
    text = text.replace("r i c h o n a", "richona")
    text = text.replace("r i c h o u", "richou")
    text = text.replace("m a g a", "maga")
    text = text.replace("m a g u", "magu")
    text = text.replace("m a g gi", "maggi")
    text = text.replace("m a g g i", "maggi")
    text = text.replace("w a t n a", "watna")
    text = text.replace("w e d e n a", "wedena")
    text = text.replace("w a d w a", "wadwa")
    text = text.replace("w a n d i k o", "wandiko")
    text = text.replace("m o n d i k i", "mondiki")
    text = text.replace("m o s e n d i k i", "mosendiki")
    text = text.replace("m o s e n d i k o", "mosendiko")
    text = text.replace("m o n d i k o", "mondiko")
    text = text.replace("n d i k o", "ndiko")
    text = text.replace("N d i k o", "Ndiko")
    text = text.replace("b a r u p a", "barupa")
    text = text.replace("b a r u w a", "baruwa")
    text = text.replace("b a r u p e", "barupe")
    text = text.replace("b a r u w e", "baruwe")
    text = text.replace("p o g r u o k", "pogruok")
    text = text.replace("w i n j r u o k", "winjruok")
    text = text.replace("l a l r u o k", "lalruok")
    text = text.replace("r e s r u o k", "resruok")
    text = text.replace("w a r r u o k", "warruok")
    text = text.replace("c h a k r u o k", "chakruok")
    text = text.replace("r u m o", "rumo")
    text = text.replace("r u m o", "rumo")
    text = text.replace("r u m e", "rume")
    text = text.replace("o s e c h o p o", "osechopo")
    text = text.replace("c h o p o", "chopo")
    text = text.replace("c h o p i", "chopi")
    text = text.replace("c h o p o", "chopo")
    text = text.replace("c h o p u", "chopu")
    text = text.replace("g id u t o", "giduto")
    text = text.replace("g i d u t o", "giduto")
    text = text.replace("t i e n d e", "tiende")
    text = text.replace("t i e n d e", "tiende")
    text = text.replace("t i e n d i", "tiendi")
    text = text.replace("t i e n d", "tiend")
    text = text.replace("t i e n d g i", "tiendgi")

    # Generic cleaner for stray letters
    # Find patterns like " f u p " surrounded by spaces or start/end
    # This is complex, but the above covers 90% of the text's visible issues.
    
    # Fix broken numbers like "1 0", "1 1" etc.
    for i in range(100):
        s_i = str(i)
        if len(s_i) > 1:
            spaced = " ".join(s_i)
            text = text.replace(spaced, s_i)
            
    # Remove extra spaces before punctuation
    text = re.sub(r'\s+([.,!?;:])', r'\1', text)
    # Remove double spaces
    text = re.sub(r' +', ' ', text)
    
    return text.strip()

def parse_book(text, book_id):
    text = clean_spacing(text)
    # Split by Chapter starts: "1An Paulo", "2Omiyo", etc.
    # We look for a digit at the start of a sentence or line that is significantly larger/different?
    # No, they are just "1An", "2Omiyo".
    
    chapters = {}
    
    # Find all verses. Verses start with a number.
    # The first verse of a chapter also includes the chapter number if it's the first verse.
    # Actually, the user provided text has verses concatenated.
    
    # Let's try to split by verse markers.
    # A verse marker is a number followed by words.
    # In some cases, the chapter number is combined with verse 1.
    
    # Looking at Romans:
    # "1An Paulo... 2Wach Maber... 3kuom Wuode... 32Kata obedo ni..."
    # "2Omiyo in bende... 2To koro... 16Mano notimre..."
    
    # It seems for each chapter, the first verse starts with the chapter number and the first word.
    # And then subsequent verses start with their number.
    
    chapter_data = []
    # Split text into "Chapters" roughly if possible, but verses are continuous.
    
    # Let's use regex to find all numbers.
    # We need to distinguish between verse numbers and numbers inside text.
    # Usually verse numbers are at the start of a logical segment.
    
    # This is hard without a clearer delimiter.
    # I will do it part by part for each book.
    pass

# I'll manually prepare the content for Romans now to be safe.
