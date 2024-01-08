import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("App rendering and functionality",()=>{
  test("should display an X",()=>{
      render(<App/>);
      const gameBoard=screen.getByTestId("gameBoard");
      expect(gameBoard).not.toBeNull();
      expect(gameBoard.textContent).toBe("");
  });

  test("should render a button",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button");
    expect(button).not.toBeNull();
  });

  test("should render 9 buttons",()=>{
    render(<App/>);
    const buttons=screen.getAllByRole("button");
    expect(buttons.length).toBe(9);
  });

  test("should be able to click the button",()=>{
    render(<App/>);
    const button=screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

  test("should render X in the square when click",()=>{
    render(<App/>);
    const button =screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(button.textContent).toBe("X");
  });

  test("should render O on the second move",()=>{
    render(<App/>);
    const Square=screen.getAllByRole("button");
    fireEvent.click(Square[0]);
    expect(Square[0].textContent).toBe("X");
    fireEvent.click(Square[1]);
    expect(Square[1].textContent).toBe("O");
});

test("should display token on the squae only when it is empty",()=>{
  render(<App/>);
  const square=screen.getAllByRole("button");
  fireEvent.click(square[0]);
  expect(square[0].textContent).toBe("X");
  fireEvent.click(square[0]);
  expect(square[0].textContent).toBe("X");
});

test("should be able to calculate winner",()=>{
  render(<App/>);
  const squares=screen.getAllByRole("button");
  const status=screen.getByTestId("status");
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  fireEvent.click(squares[3]);
  fireEvent.click(squares[4]);
  fireEvent.click(squares[6]);
  fireEvent.click(squares[7]);
  expect(status.textContent).toBe("winner: X");
});

});
