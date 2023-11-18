/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData4.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData4 = [
            {
                problem : `1. Create an applet showing the string "Hello World" which is embedded in the HTML page.`,
                solution : `
import java.applet.Applet;
import java.awt.Graphics;
public class pro1 extends Applet
{
    public void paint (Graphics g)
    {
        g.drawString ("Hello World", 20, 20);
    }
}
                `,
                comeout : `applet/j1.png`
            },
            {
                problem : `2. Create an applet showing the string "Hello World" which is executed by an appletviewer.`,
                solution : `
import java.applet.Applet;
import java.awt.*;

 //<applet code= pro2 width= 600 height=500 ></applet>

 public class pro2 extends Applet {
   
    public void paint(Graphics g){
        g.setColor(Color.red);
        g.drawString("hello world", 20, 20);
    }
    
}
                `,
                comeout : `applet/j2.png`
            },
            {
                problem : `3. Create an applet in Java to draw a circle.`,
                solution : `
/*
<applet code="a7039applets3.class" width=500 height=500>
</applet>
*/
import java.awt.*;
import java.applet.*;

public class a7039applets3 extends Applet {

    public void init()
    {
        // set size
        setSize(300, 300);

        repaint();
    }

    // paint the applet
    public void paint(Graphics g)
    {
        // set Color for rectangle
        g.setColor(Color.red);

        // draw a ellipse
        // g.drawOval(100, 100, 150, 100);
            g.drawOval(50,50,150,100);

    }
}
                `,
                comeout : `applet/j3.png`
            },
            {
                problem : `4. Create an applet in Java to draw a polygon.`,
                solution : `
import java.applet.Applet;
import java.awt.*;
 public class pro4 extends Applet
 {
 
public void paint( Graphics g )
{
int x[] = { 20, 40, 50, 30, 20, 15 }; 
int y[] = { 50, 50, 60, 80, 80, 60 }; 
int num=5;
g.setColor(Color.blue); 
g.drawPolygon(x,y, num);
 
}
}
//<applet code= pro4 width= 600 height=500 ></applet>
                `,
                comeout : `applet/j4.png`
            },
            {
                problem : `5. Create an applet in Java to draw a rectangle.`,
                solution : `
import java.applet.*;
import java.awt.*;

public class RectangleApplet extends Applet {
    public void paint(Graphics g) {
        g.drawRect(50, 50, 200, 100);
    }
}
/*<applet code="RectangleApplet.class" width="400" height="400"></applet> */
                `,
                comeout : `applet/j5.png`
            },
            {
                problem : `6. Create an applet in Java to draw a square.`,
                solution : `
import java.applet.*;
import java.awt.*;

public class pro6 extends Applet {
    public void paint(Graphics g) {
        g.drawRect(50, 50, 200, 200);
    }
}
/*<applet code="pro6" width="400" height="400"></applet> */
                `,
                comeout : `applet/j6.png`
            },
            {
                problem : `7. Create an applet in Java to draw 4 concentric circles.`,
                solution : `
/*Java Applet to Print Concentric Circles using Applet*/
import java.applet.*;
import java.awt.*;
public class pro7 extends Applet
{
    //Initialize the applet
    public void init()
    {
	setBackground(Color.yellow);
    }
    //Draw cocentric circle
    public void paint(Graphics g)
    {
	g.setColor(Color.red);
	int rad=25;
	int dia=50;
	for(int i=0;i<4;i++)
	{
	    g.drawOval(250-(i*rad),250-(i*rad),(i+1)*dia,(i+1)*dia);
	}
    }
}
/*<applet code = pro7 width=500 height=500></applet>*/
                `,
                comeout : `applet/j7.png`
            },
            {
                problem : `8. Create an applet in Java to draw a line.`,
                solution : `
import java.applet.Applet;  
import java.awt.*;  

public class GraphicsDemo extends Applet{  

public void paint(Graphics g)
{  
g.setColor(Color.red);  
g.drawLine(20,30,20,300);  }}

/* <applet code="GraphicsDemo.class" width="300" height="300">  */
                `,
                comeout : `applet/j8.png`
            },
            {
                problem : `9. Create an applet in Java to draw an oval.`,
                solution : `
import java.applet.Applet;
import java.awt.Graphics;

class Applet_9 extends Applet {
    public void paint(Graphics g) {
        // Draw an oval with the specified coordinates and dimensions
        int x = 50;
        int y = 50;
        int width = 200;
        int height = 100;
        g.drawOval(x, y, width, height);
    }
}               
                `,
                comeout : `applet/j9.png`
            },
            {
                problem : `10. Create an applet in Java to draw an arc.`,
                solution : `
import java.applet.applet;
import java.awt;

import java.awt.color;
import java.awt.Graphics;

public class applletarc
{
    public void paint(Graphics g){
        setForeground(Color.red);
        g.drawArc(10,10,50,100,10,45);
        g.fillArc(100,10,1000,100,0,90);

    }
}
                `,
                comeout : `applet/j10.png`
            },
            {
                problem : `11. Create an applet in Java to change the background color.`,
                solution : `
import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;

public class Applet7104prog11 extends Applet {
    /*
     * Topic = Applet
     * prog.no 11 Java Program to change background color in applet.
     */
    public Applet7104prog11() {
        setBackground(Color.red);
    }

    public void paint(java.awt.Graphics g) {

        g.drawString("Background Color Changed", 50, 50);
    }
    /*
     * <applet code="Applet7104prog11.class" width="300" height="300">
     * </applet>
     */
}
                `,
                comeout : `applet/j11.png`
            },
            {
                problem : `12. Create an applet in Java to draw a rounded rectangle.`,
                solution : `
import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.geom.RoundRectangle2D;

class Applet_12 extends Applet {
    public void paint(Graphics g) {
        // Cast Graphics to Graphics2D for more advanced shapes
        Graphics2D g2d = (Graphics2D) g;

        // Draw a rounded rectangle with the specified coordinates and dimensions
        int x = 50;
        int y = 50;
        int width = 200;
        int height = 100;
        int arcWidth = 30; // The width of the arc
        int arcHeight = 30; // The height of the arc

        RoundRectangle2D roundedRectangle = new RoundRectangle2D.Double(x, y, width, height, arcWidth, arcHeight);
        g2d.draw(roundedRectangle);
    }
}
                `,
                comeout : `applet/j12.png`
            },
            {
                problem : `13. Create an applet in Java to set font.`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleFontSetter extends JFrame {

    private JLabel label;

    public SimpleFontSetter() {
        setTitle("Font Setter");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300, 150);
        setLayout(new FlowLayout());

        label = new JLabel("Hello, Font!");
        add(label);

        JButton fontButton = new JButton("Set Font");
        fontButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                setFont();
            }
        });
        add(fontButton);
    }

    private void setFont() {
        Font currentFont = label.getFont();
        Font selectedFont = JFontChooser.showDialog(this, "Choose Font", currentFont);

        if (selectedFont != null) {
            label.setFont(selectedFont);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            SimpleFontSetter fontSetter = new SimpleFontSetter();
            fontSetter.setVisible(true);
        });
    }
}
                `,
                comeout : `applet/j13.png`
            },
            {
                problem : `14. Create an applet to display a digital clock.`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DigitalClock extends JFrame {

    private JLabel timeLabel;

    public DigitalClock() {
        setTitle("Digital Clock");
        setSize(300, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        timeLabel = new JLabel("", JLabel.CENTER);
        timeLabel.setFont(new Font("Arial", Font.PLAIN, 36));
        updateClock();
        add(timeLabel);

        Timer timer = new Timer(1000, e -> updateClock());
        timer.start();
    }

    private void updateClock() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
        String formattedDate = dateFormat.format(new Date());
        timeLabel.setText(formattedDate);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            DigitalClock digitalClock = new DigitalClock();
            digitalClock.setVisible(true);
        });
    }
}
                `,
                comeout : `applet/j14.png`
            },
            {
                problem : `15. Java Program to Draw a Smiling Face using Graphics Class Methods`,
                solution : `
import java.applet.Applet;
import java.awt.*;

//<applet code= appro1 width= 600 height=500 ></applet>
   
public class appro1 extends Applet 
{
  public void paint(Graphics g) 
   {
      setBackground(Color.red);
      g.setColor(Color.yellow);
      g.fillOval(100, 100, 350, 350);
      g.setColor(Color.black);
      g.fillOval(195, 190, 40, 40);
      g.fillOval(325, 190, 40, 40);
      g.drawArc(200, 290, 150, 70, 180, 180);
   }
}
                `,
                comeout : `applet/j15.png`
            }
        ]
    // programData4 : applets

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end