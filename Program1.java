class Program1
{
  public static void main(String args[])
  {
    short N = new java.util.Scanner(System.in).nextShort();

    if (N%2 != 0)
    {
      System.out.println("Weird");
    }
    else
    {
      if ((N >= 2 && N <= 6) || (N > 20))
      {
        System.out.println("Weird");
      }
      else if (N >= 6 && N <= 20)
      {
        System.out.println("Not Weird");
      }
    }

  }
}
