class Passage {
  constructor(author,title,date,geography){
    this.author=author;
    this.title=title;
    this.date=date;
    this.geography=geography;
    this.passage='';
  }
}


let passageZero=new Passage('John Melish', 'Travels in America', 'July 15, 1806');

passageZero.passage=`
On the 15th, at day break, I proceeded on my journey, 
through a low, swampy, barren country, where the road 
forked so often, that I travelled with difficulty; but, after 
missing my way several times, I reached Mr. Scarborough's, 
at 11 o'clock, where I found a most hospitable welcome. 

On my way, I passed many creeks and saw-mills, and 
I learned that a considerable trade, in this part of the 
country, consists in sawing timber into boards and planks, 
called lumber, and floating them down the river to a 
market. 

Mr. Scarborough has a very comfortable establishment, 
consisting of a good farm, a store, and saw-mill ; and, be- 
ing much respected, has the best trade in this part of the 
country. On going into the store, I was surprised to ob- 
serve the vast variety of articles it contained ; consisting 
of drygoods, groceries, hardware, earthenware, medicines, 
&c. I was informed, that the mode of doing business 
was to give a credit to the planters till the crop was ready 
for market, and then to take their surplus produce, con- 
sisting principally of cotton, in payment. The business 
was conducted by a discreet Englishman, and they had 
an excellent run ; but I learned that country stores had 
multiplied to such an extent, that the business was over- 
done generally, and people would need to be very cautious 
in dealing with country merchants. 

Having been most hospitably entertained by this family, 
for two days, I took my departure for Savannah, on 
Thursday, 17th July, and rode 28 miles through a very 
barren country, containing few settlements, to the house 
of a Mrs. Dunn, where I stopped for the night.`

let passageOne =new Passage('John Melish', 'Travels in America', 'July 4, 1806');

passageOne.passage=`
The whole of my observations in this place tended to 
convince me, that the American character was very indif- 
ferently understood in Britain ; and, indeed, very much 
misrepresented. I was satisfied, from everything I saw 
and heard, that there was no animosity against the British 
people whatever ; and that the animosity against the British 
government was the consequence of what they conceive to 
be a series of injuries long persevered in, and some of 
them even justified on the score of privilege. 

Great mistakes may be committed, by judging of the 
American character from what is to be seen in the sea- 
ports. Nothing can be more erroneous than a judgment 
so formed. The commercial cities of America are like 
those of other countries, and principle is often sacrificed 
at the shrine of commerce ; while a considerable part of 
the commerce of the United States is carried on by fo- 
reigners, each so anxious to extend the trade with his 
native country, in which he is most interested, that the 
tone of national sentiment is often lost, or but indistinctly 
seen, in the conflicting opinions which are every day pro- 
mulgated. 

To view the American character fairly, we must go into 
the interior of the country, and there the first remark will 
probably be, that the inhabitants have a spirit of indepen- 
dence, and will brook no superiority. Every man is con- 
scious of his own political importance, and will suffer none 
to treat him with disrespect. Nor is this disposition con- 
fined to one rank ; it pervades the whole, and is probably 
the best guarantee for the continuance of the liberty and 
independence of the country. 

It has been remarked, that this disposition may encou- 
rage rudeness ; but I have not yet seen it. As the people 
will bend to no superiority, they really affect none ; and I 
am impressed with the belief, that it is a stranger's own 
fault, if he does not feel very happy among them.`



const Surprises = {
  
  Paragraphs:[passageZero,passageOne],
  getNumber(){
    //let random= Math.floor((Math.random() * 2) + 1);
    return this.Paragraphs[0];
  }

}

export default Surprises;
