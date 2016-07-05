Ecrire un programme qui prend une année en entrée et signale si elle est bissextile.

Ce qui est délicat ici, c'est qu'une année bissextile dans le calendrier grégorien se produit :

```plain
pour chaque année qui est divisible par 4
   sauf les années qui sont divisibles par 100
     à moins que l'année ne soit aussi divisible par 400
```

Par exemple, 1997 n'est pas une année bissextile, mais 1996 l'est, 1900 est pas une année bissextile, mais 2000 l'est !

Si votre language fournit une méthode dans la bibliothèque standard qui fait ce calcul, ignorez le.
