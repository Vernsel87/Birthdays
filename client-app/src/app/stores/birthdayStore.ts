import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Birthday } from "../models/birthday";


export default class BirthdayStore {
  birthdayRegistry = new Map<string, Birthday>();
  selectedBirthday: Birthday | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get birthdaysByDate(){
    return Array.from(this.birthdayRegistry.values()).sort((a, b) => 
    Date.parse(a.dateOfBirth)  - Date.parse(b.dateOfBirth));
  }

  get groupedBirthdays(){
    return Object.entries(
        this.birthdaysByDate.reduce((birthdays, birthday)=>{
          const dateOfBirth = birthday.dateOfBirth;
          birthdays[dateOfBirth] = birthdays[dateOfBirth] ? [...birthdays[dateOfBirth], birthday] : [birthday];
          return birthdays;
        }, {} as {[key: string] : Birthday[] })
    );
  }

  loadBirthdays = async () => {
    this.loadingInitial = true;
    try {
      const birthdays = await agent.Birthdays.list();
      birthdays.forEach((birthday) => {
      this.setBirthday(birthday);                
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadBirthday = async (id: string) =>{
    let birthday = this.getBirthday(id);
    
    if(birthday){
      this.selectedBirthday = birthday;
      return birthday;
    } else {
      this.loadingInitial = true;
      try {
        birthday = await agent.Birthdays.details(id);
        this.setBirthday(birthday);
        runInAction(() => {
          this.selectedBirthday = birthday;
          this.loadingInitial = false;

        });
        
        
        return birthday;
      } catch (error){
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  }

  setBirthday = (birthday : Birthday) => {
    birthday.dateOfBirth = birthday.dateOfBirth.split("T")[0]; // Only get the first segment of the date
    this.birthdayRegistry.set(birthday.id, birthday);
  }

  private getBirthday = (id: string) =>{
    return this.birthdayRegistry.get(id);
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  
  createBirthday = async (birthday: Birthday) => {
    this.loading = true;
    try {
      await agent.Birthdays.create(birthday);
      runInAction(() => {
        this.birthdayRegistry.set(birthday.id, birthday);
        this.selectedBirthday = birthday;
        this.editMode = false;
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateBirthday = async (birthday: Birthday) => {
    this.loading = true;
    try{
      await agent.Birthdays.update(birthday);
      runInAction(()=>{
        this.birthdayRegistry.set(birthday.id, birthday);
        this.selectedBirthday = birthday;
        this.editMode = false;
        this.loading = false;        
      })
    }catch (err){
      console.log(err);
      runInAction(()=>{
        this.loading = false;
      })
    }
  }

  



  deleteBirthday = async (id:string) =>{
    this.loading = true;
    try{
      await agent.Birthdays.delete(id);
      runInAction(()=>{
        this.birthdayRegistry.delete(id);
        this.loading = false;
      })
    }catch(err){
      console.log(err);
      runInAction(()=>{
        this.loading = false;
      })
    }
  }
}
