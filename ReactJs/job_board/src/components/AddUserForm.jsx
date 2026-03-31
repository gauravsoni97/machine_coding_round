
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function addUserForm() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username">Username</Label>
        </div>
        <TextInput id="username" type="text" placeholder="Enter Username Here..." required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2">Your email</Label>
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
 
      <Button type="submit">Register new account</Button>
    </form>
  );
}

export default addUserForm;