import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './stepper.css';

// const steps = ['Eyfel Kulesi (Paris)', 'Louvre Müzesi (Paris)', 'Notre-Dame Katedrali (Paris)', 'Mont Saint-Michel (Normandiya)', 'Cote dAzur (Fransa Rivierası)'];
// const stepsContent = [ {
//         "image": eiffel,
//         "content": "Eyfel Kulesi, Paris'in sembolik yapılarından biridir ve dünyanın en ünlü yapılarından biridir. Tarihi, mimarisi ve görüntüsü ile sadece Paris'te değil, tüm dünyada tanınmaktadır. Eiffel Kulesi'ne giderek, hem Paris'in panoramik manzarasını hem de tarihi bir yapıyı keşfetme fırsatını yakalayabilirsiniz."
//     }, {
//         "image": louvre,
//         "content": "Louvre Müzesi, dünyanın en büyük sanat müzelerinden biridir ve 35.000'in üzerinde sanat eserine ev sahipliği yapmaktadır. Mona Lisa, Venüs de Milo ve kanatlı zafer heykeli gibi dünyaca ünlü eserleri içermektedir. Müze, tarihi ve sanatsal açıdan önemli eserlerin yanı sıra Paris'in en güzel binalarından biri olan Louvre Sarayı'na da ev sahipliği yapmaktadır. Louvre Müzesi'ni ziyaret ederek, dünya tarihinin en önemli sanat eserlerini görme fırsatını yakalayabilirsiniz."
//     }, {
//         "image": katedral,
//         "content": "Notre-Dame Katedrali, Paris'in sembolik yapılarından biridir ve Gotik mimarisinin en ünlü örneklerinden biridir. Tarihi açıdan önemli bir yapı olan katedral, Victor Hugo\'nun \"Notre-Dame'ın Kamburu\" romanında da yer almaktadır. Katedralin güzel vitray pencereleri, devasa kulesi ve muhteşem iç tasarımı, Paris\'teki diğer tarihi yapılarla birlikte görülmeye değer bir yerdir. Ayrıca, katedralin çatısında yer alan ve \"La Gargouille\" adı verilen efsanevi canavar heykelleri de ziyaretçiler tarafından ilgiyle karşılanmaktadır."
//     }, {
//         "image": montSaint,
//         "content": "Mont Saint-Michel, tarihi ve doğal güzelliği ile ünlü bir adacık ve manastır kompleksidir. 8. yüzyılda kurulan manastır, Orta Çağ'da Fransa'nın en önemli dini ve kültürel merkezlerinden biri haline gelmiştir. Mont Saint-Michel, mimarisi, manzarası ve tarihi önemi ile ziyaretçiler için büyüleyici bir deneyim sunar. Ayrıca, adacığın çevresinde yer alan tuzlu çayırlıkları, deniz kabukları ve deniz ürünleri gibi doğal zenginlikleri de keşfetmek için fırsatlar sunar."
//     }, {
//         "image": cotedAzur,
//         "content": "Cote d'Azur, Fransa'nın güney sahilinde yer alan bir bölgedir ve dünyaca ünlü tatil beldelerine ev sahipliği yapmaktadır. Güzel plajları, deniz sporları, lüks otelleri, yüksek kaliteli restoranları ve gece hayatı ile ünlüdür. Ayrıca, Cote d'Azur'un muhteşem manzarası, tarihi kasabaları, müzeleri ve sanat galerileri de turistler için keşfedilecek birçok şey sunmaktadır. Cannes Film Festivali gibi uluslararası etkinlikler de bölgenin turistik çekiciliğini arttırmaktadır. Cote d'Azur, Fransa'nın güneyinde unutulmaz bir tatil deneyimi sunan eşsiz bir bölgedir."
//     }]

export default function HorizontalLinearStepper({steps, stepsContent}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', marginTop: "3rem" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            // labelProps.optional = (
            //   <Typography variant="caption">Optional</Typography>
            // );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Gezmeyi tamamladık!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Sıfırla</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>{steps[activeStep]}</Typography>
          <div className='content-stepper'>
            <img className='resim' src={stepsContent[activeStep].image} />
            <Typography sx={{maxWidth: '75%'}}>{stepsContent[activeStep].content}</Typography>
          </div>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Geri
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Geç
              </Button>
            )} */}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Bitti' : 'İleri'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
