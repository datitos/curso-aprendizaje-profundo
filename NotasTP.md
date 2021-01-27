TP 1:

Hay una parte de tutorial para py torch, colab y Jupyter

Usar lo anterior para acondicionar data set FIFA.

TP 2:

Analisis del data set FIFA: limitaciones de las regresiones lineales

Implementación de NeRF 

Ejemplo de preguntas de examen

posibles pregunta teóricas:
Comparar:
	Max
	SoftMax
	tanh			          | ¿Demostrar que una es similar a la otra?
	curva sigmoide      |
¿Por qué es necesaria siempre un función de activación?

TP 3:

Dropout, Underfitting y Overfifting en data set FIFA

Ejemplo de preguntas de examen

Dada una serie de datos con 1000 puntos: --> 1000 funciones Linealmente Independiente

¿Que grado requiere un polinomio que ajuste perfecto?  999
¿Cuantos senos y cosenos requiere un ajuste perfecto? 1 constante 500 senos y cosenos (frecuencia es dato) FFT
¿Cuantas exponenciales con distinta base se necesitan para un ajuste perfecto? 1000
¿Puede encontrar una relación entre las 3 anteriores?

Considere una función de perdida con L2:  L2(w) = 0

f(w,b) + k*L2(w)

¿que ocurre si ahora w y k pueden varia libremente? ¿Qué tipo de problema es?
En función de lo anterior, ¿Qué efecto en general cree que tendran los términos de tipo Lp?

¿Que otros ejemplos hay de normas Lp? ¿Qué ocurre con p -> infinito?

Analizar las normas L1, L2, L3, L0.5 y Linfinito (grafiquitos)

En función de los gráficos:
¿Qué efectos tendrá L1?
¿Qué efectos tendrá L2?
¿Por qué no se usa L0.5? ¿Por qué no se usa L3?
¿Por qué no se usa Linfinito?

Norma con matrices

  1) multiplicación de matrices
  2) no cualquier matriz <-- 
  3) casi lo mismo L2

In Bayesian statistics we use the product of prior and likelihood to arrive at a posterior via P(w|x) proportionalP(x|w)P(w). How can you identify P(w) with regularization?

¿Por que no es usan polinomios de multiple variable?

TP4

Elegir alguna de las arquitecturas descriptas e implmentarlas

visualizar features

Diferentes capas se especializan en diferentes "nichos" (Hablar de "neuronas abuela" y líneas)

efecto de trancos y pools

definida una imagen de n x m con un pading p, una convolución p x q y un paso s, como es la nueva  imagen i x j 

convolucion 1x1

pool como convolución

convolución como operadores --> derivadas, integrales, transformadas de fourier, etc.

como elimina ruido una CNN --> filtros pasabajo (eliminación de frecuencias altas y promedio)

autoencoder como disminución de ruido y compresión jpg

TP5 

A partir del práctico 4, implementar fine tuning

fine-tuning, overfitting, data sets pequeños

leer:

https://ruder.io/nlp-imagenet/

para clase: fine-tuning, transferencia de aprendizeje, modularidad del cerebro y plasticidad del cerebro 

para clase: Analogias entre Lenguajes Naturales fonémicos y de señas (modilaridad del lenguje en cerebros) relacionar con fine tuning

para clase:  Sapolsky <-- 

TP10

