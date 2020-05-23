import { BasicToDo } from './basic-to-do';

describe('BasicToDo', () => {
  it('should create an instance', () => {
    expect(new BasicToDo()).toBeTruthy();
  });

  it('should create an instance', () =>{
    let toDo = new BasicToDo({
      title:'test',
      complete:true
    });

    expect(toDo.title).toEqual('test');
    expect(toDo.complete).toEqual(true);
  });
});
