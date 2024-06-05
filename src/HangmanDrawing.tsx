const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '70px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '150px',
      background: 'black',
      position: 'absolute',
      top: '110px',
      right: '100px',
    }}
  />
);

const ARMONE = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '110px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const ARMTWO = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '0px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEGONE = (
  <div
    style={{
      width: '95px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '250px',
      right: '5px',
      rotate: '45deg',
      transformOrigin: 'left top',
    }}
  />
);

const LEGTWO = (
  <div
    style={{
      width: '95px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '250px',
      right: '110px',
      rotate: '-45deg',
      transformOrigin: 'right top',
    }}
  />
);

const BENCHLEGLEFT = (
  <div
    style={{
      width: '10px',
      height: '80px',
      background: '#402F1D',
      position: 'absolute',
      top: '330px',
      right: '180px',
    }}
  />
);

const BENCHLEGRIGHT = (
  <div
    style={{
      width: '10px',
      height: '80px',
      background: '#402F1D',
      position: 'absolute',
      top: '330px',
      right: '20px',
    }}
  />
);

const BENCHTOP = (
  <div
    style={{
      width: '170px',
      height: '10px',
      background: '#402F1D',
      position: 'absolute',
      top: '325px',
      right: '20px',
    }}
  />
);

const BODY_PARTS = [
  HEAD,
  BODY,
  ARMONE,
  ARMTWO,
  LEGONE,
  LEGTWO,
  BENCHLEGRIGHT,
  BENCHLEGLEFT,
  BENCHTOP,
];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative', marginRight: '60px' }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: '#402F1D',
          marginLeft: '120px',
          top: 0,
          right: 100,
          position: 'absolute',
        }}
      />
      <div
        style={{
          height: '10px',
          width: '200px',
          background: '#402F1D',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '400px',
          width: '10px',
          background: '#402F1D',
          marginLeft: '120px',
        }}
      />
      <div
        style={{
          height: '10px',
          width: '425px',
          background: '#402F1D',
        }}
      />
    </div>
  );
}
