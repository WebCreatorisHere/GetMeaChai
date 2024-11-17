import mongoose from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String},
    profilepic: { type: String ,default:"https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1721260800&token-hash=XfkA_EhfI673FZE97tHzStxljzJe4zsaoVW4Hno8QPY%3D"},
    coverpic: { type: String ,default:"https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=zQveauUqcI98L9tF0j3FauGI6WNfKcQT93CAZFZZ1Ec%3D"},
    razid:{type:String},
    razsec:{type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
   
});

export default mongoose.models.User || model("User", userSchema) ;