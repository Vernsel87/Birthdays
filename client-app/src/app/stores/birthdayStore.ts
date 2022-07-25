import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Birthday } from "../models/birthday";
import { v4 as uuid } from "uuid";

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

  loadBirthdays = async () => {
    this.setLoadingInitial(true);
    try {
      const birthdays = await agent.Birthdays.list();
      birthdays.forEach((birthday) => {
        birthday.dateOfBirth = birthday.dateOfBirth.split("T")[0]; // Only get the first segment of the date
        this.birthdayRegistry.set(birthday.id, birthday);
        this.setLoadingInitial(false);
      });
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  selectBirthday = (id: string) => {
    this.selectedBirthday = this.birthdayRegistry.get(id);
  };

  cancelSelectedBirthday = () => {
    this.selectedBirthday = undefined;
  };

  openForm = (id?: string) => {
    id ? this.selectBirthday(id) : this.cancelSelectedBirthday();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createBirthday = async (birthday: Birthday) => {
    this.loading = true;
    birthday.id = uuid();
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
        if(this.selectedBirthday?.id === id)  this.cancelSelectedBirthday();
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
